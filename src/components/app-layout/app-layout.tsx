import styles from './app-layout.module.css';
import AdaptiveImage from '../adaptive-image/adaptive-image';

const AppLayout = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={`${styles.frame} ${styles.cover}`}>
          <AdaptiveImage
            path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
            altText="Пейзаж."
            disableLoader={true}
          />
        </div>
        <h1 className={styles.title}>Adaptive image component</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.frames}>
          <div className={styles.frame}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
              isDraggable={true}
              loaderColor="#0d00ffa9"
            />
          </div>
          <div className={`${styles.frame} ${styles.narrow}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.round}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.wide}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.smallSquare}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.smallRound}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
