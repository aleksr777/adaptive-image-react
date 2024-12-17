import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './adaptive-image.module.css';
import Loader from '../loader/loader';

interface AdaptiveImageProps {
  path: string;
  altText?: string;
  isDraggable?: boolean;
  loaderColor?: string;
  disableLoader?: boolean;
}

type TimerId = ReturnType<typeof setTimeout>;

const AdaptiveImage = ({
  path,
  altText,
  isDraggable = false,
  loaderColor = '',
  disableLoader = false,
}: AdaptiveImageProps) => {
  const MIN_WIDTH_FOR_LOADER = 100;
  const MIN_HEIGHT_FOR_LOADER = 100;

  const alt = altText && typeof altText === 'string' ? altText : '';
  const src = path && typeof path === 'string' ? path : '';
  const color = loaderColor && typeof loaderColor === 'string' ? loaderColor : '';

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [wrapperSize, setWrapperSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [isTooSmall, setIsTooSmall] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const debounce = (func: () => void, wait: number) => {
    let timeout: TimerId;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  };

  const updateSize = useCallback(
    debounce(() => {
      if (!wrapperRef.current || disableLoader) return;
      const width = wrapperRef.current.offsetWidth;
      const height = wrapperRef.current.offsetHeight;
      setWrapperSize({ width, height });
      setIsTooSmall(width < MIN_WIDTH_FOR_LOADER || height < MIN_HEIGHT_FOR_LOADER);
    }, 200),
    [disableLoader],
  );

  useEffect(() => {
    if (isLoading && !disableLoader) {
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => {
        window.removeEventListener('resize', updateSize);
      };
    }
  }, [isLoading, updateSize, disableLoader]);

  const loaderSize =
    !disableLoader && isLoading
      ? Math.round(Math.min(wrapperSize.width, wrapperSize.height) / 3)
      : 0;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [path, altText]);

  let wrapperStyle = styles.wrapper;
  const pictureStyle = styles.picture;
  let imgStyle = styles.picture__img;

  if (isLoading) {
    wrapperStyle = `${wrapperStyle} ${styles.wrapper_loading}`;
  }

  if (hasError) {
    wrapperStyle = `${wrapperStyle} ${styles.wrapper_error}`;
    imgStyle = `${imgStyle} ${styles.picture__img_error}`;
  }

  return (
    <div className={wrapperStyle} ref={wrapperRef}>
      {!disableLoader && isLoading && !isTooSmall && <Loader size={loaderSize} color={color} />}
      <picture className={pictureStyle}>
        <img
          className={imgStyle}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          draggable={isDraggable}
        />
      </picture>
    </div>
  );
};

export default AdaptiveImage;
