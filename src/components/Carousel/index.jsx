import carrossel from "../../assets/carrossel.png";
import banner1 from "../../assets/banner_1.png";
import banner2 from "../../assets/banner_2.png";
import styles from "./Carousel.module.css";

export const Carousel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          className={styles.radio1}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          className={styles.radio2}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          className={styles.radio3}
        />

        <div className={`${styles.slide} ${styles.first}`}>
          <img src={carrossel} alt="imagem1" className={styles.imgSlide} />
        </div>
        <div className={styles.slide}>
          <img src={banner1} alt="imagem2" className={styles.imgSlide} />
        </div>
        <div className={styles.slide}>
          <img src={banner2} alt="imagem3" className={styles.imgSlide} />
        </div>

        <div className={styles.navigation_auto}>
          <div className={styles.auto_btn1}></div>
          <div className={styles.auto_btn2}></div>
          <div className={styles.auto_btn3}></div>
        </div>
      </div>

      <div className={styles.manual_navigation}>
        <label htmlFor="radio1" className={styles.manual_btn}></label>
        <label htmlFor="radio2" className={styles.manual_btn}></label>
        <label htmlFor="radio3" className={styles.manual_btn}></label>
      </div>
    </div>
  );
};
