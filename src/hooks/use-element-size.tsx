import { useState, useEffect, useCallback, RefObject } from 'react';

export function useElementSize(ref: RefObject<HTMLElement>) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  // Use ResizeObserver for efficient size tracking
  const updateSize = useCallback(() => {
    const element = ref.current;
    if (element) {
      const { height, width } = element.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [ref]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create ResizeObserver instance
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;
      updateSize();
    });

    // Initial size calculation
    updateSize();

    // Start observing the element
    resizeObserver.observe(element);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, updateSize]);

  return size;
}
