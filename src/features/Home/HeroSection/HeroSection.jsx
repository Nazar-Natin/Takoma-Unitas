import React from "react";
import { useTranslation } from "react-i18next";
import heroImage from '../../../assets/images/hero-image.jpg'
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{t("hero.title")}</h1>
          <p className={styles.heroSubtitle}>{t("hero.text")}</p>
          <button className={styles.heroButton}>{t("hero.button")}</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src={heroImage}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
