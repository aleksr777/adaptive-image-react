import styles from './app-layout.module.css';
import AdaptiveImage from '../adaptive-image/adaptive-image';

const AppLayout = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={`${styles.frame} ${styles.frame_cover}`}>
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
          <div className={`${styles.frame} ${styles.frame_narrow}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.frame_round}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.frame_wide}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.frame_smallSquare}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.frame_smallRound}`}>
            <AdaptiveImage
              path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
              altText="Пейзаж."
            />
          </div>
        </div>
        <div className={`${styles.frame} ${styles.frame_big}`}>
          <AdaptiveImage
            path="https://img2.akspic.ru/crops/6/5/2/9/7/179256/179256-zimnee_siyanie-avrora-svalbard-zima-atmosfera-3840x2160.jpg"
            altText="Пейзаж."
          />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
