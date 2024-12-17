import styles from './app-layout.module.css';
import AdaptiveImage from '../adaptive-image/adaptive-image';

const AppLayout = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={`${styles.frame} ${styles.cover}`}>
          <AdaptiveImage
            path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
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
              path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.narrow}`}>
            <AdaptiveImage
              path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.round}`}>
            <AdaptiveImage
              path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.wide}`}>
            <AdaptiveImage
              path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.smallSquare}`}>
            <AdaptiveImage
              path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
              altText="Пейзаж."
            />
          </div>
          <div className={`${styles.frame} ${styles.smallRound}`}>
            <AdaptiveImage
              path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
              altText="Пейзаж."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
