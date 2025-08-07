import { useState, useEffect, useCallback } from 'react';

interface UseImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

export const useImagePreloader = ({ images, priority = false }: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [allLoaded, setAllLoaded] = useState(false);

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(src));
        resolve();
      };
      
      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
        reject();
      };

      // Add performance hints
      if (priority) {
        img.fetchPriority = 'high';
        img.loading = 'eager';
      } else {
        img.loading = 'lazy';
      }
      
      img.src = src;
    });
  }, [priority]);

  useEffect(() => {
    const preloadAll = async () => {
      try {
        await Promise.allSettled(images.map(preloadImage));
        setAllLoaded(true);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        setAllLoaded(true); // Continue even if some images fail
      }
    };

    if (images.length > 0) {
      preloadAll();
    }
  }, [images, preloadImage]);

  return {
    loadedImages,
    allLoaded,
    isImageLoaded: useCallback((src: string) => loadedImages.has(src), [loadedImages])
  };
};