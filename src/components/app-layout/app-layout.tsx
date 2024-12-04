import styles from './app-layout.module.css';
import PictureAdaptable from '../picture-adaptable/picture-adaptable';

const AppLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.smallSquare}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.middleSquare}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.round}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.narrow}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.wide}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.smallRound}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.veryNarrow}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
      <div className={`${styles.frame} ${styles.veryWide}`}>
        <PictureAdaptable
          path="https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1733334487~exp=1733338087~hmac=f11dfeed756f875bc7a4ed23056f4765765d9f1fca1a3a09e98ced5db224d4e8&w=996"
          altText="Пейзаж."
        />
      </div>
    </div>
  );
};

export default AppLayout;
