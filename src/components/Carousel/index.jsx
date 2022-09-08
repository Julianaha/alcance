import carrossel from "../../assets/carrossel.png";
import styles from "./Carousel.module.css";
import banner from "../../assets/banner_central.png";
import { useState } from "react";

export const Carousel = () => {
  const [count, setCount] = useState(1);

  function nextImage() {
    setCount(count++);
    if (count > 3) {
      count = 1;
    }
    
  }

  setInterval(() => {
    nextImage();
  }, 2000);

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
          <img src={banner} alt="imagem2" className={styles.imgSlide} />
        </div>
        <div className={styles.slide}>
          <img src={carrossel} alt="imagem3" className={styles.imgSlide} />
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
