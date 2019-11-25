// A hook created by Wal Wal
import {useCallback, useEffect, useState} from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => setWindowSize(getSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [getSize, isClient]);

  return windowSize;
};

export default () => {
  const windowSize = useWindowSize();
  return windowSize.width <= 700;
};
