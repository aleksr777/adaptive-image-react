import styles from './loader.module.css';

interface LoaderProps {
  color?: string;
  size?: number;
}

const Loader = ({ color, size }: LoaderProps) => {
  if (!size) {
    return null;
  }

  const defaultBaseColor = 'hsla(0, 0%, 50%, 0.4)';
  const defaultIndicatorColor = 'hsla(0, 0%, 50%, 0.8)';

  const borderSize = Math.round(size / 10);

  const stylesObj = {
    border: `${borderSize}px solid ${defaultBaseColor}`,
    borderTop: `${borderSize}px solid ${color || defaultIndicatorColor}`,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} style={stylesObj} />
    </div>
  );
};

export default Loader;
