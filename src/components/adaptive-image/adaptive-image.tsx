import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './adaptive-image.module.css';
import Loader from '../loader/loader';

interface AdaptiveImageProps {
  path: string;
  altText?: string;
  isDraggable?: boolean;
  loaderColor?: string;
}

type TimerId = ReturnType<typeof setTimeout>;

const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  path,
  altText,
  isDraggable = false,
  loaderColor = '',
}) => {
  const alt = altText && typeof altText === 'string' ? altText : '';
  const src = path && typeof path === 'string' ? path : '';
  const color = loaderColor && typeof loaderColor === 'string' ? loaderColor : '';

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [wrapperSize, setWrapperSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: TimerId;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const updateSize = useCallback(
    debounce(() => {
      if (wrapperRef.current) {
        setWrapperSize({
          width: wrapperRef.current.offsetWidth,
          height: wrapperRef.current.offsetHeight,
        });
      }
    }, 200),
    [],
  );

  useEffect(() => {
    if (isLoading) {
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => {
        window.removeEventListener('resize', updateSize);
      };
    }
  }, [isLoading, updateSize]);

  const loaderSize = isLoading
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
  let pictureStyle = styles.picture;
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
      {isLoading && <Loader size={loaderSize} color={color} />}
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
