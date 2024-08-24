import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AboutUsSection.module.css";
import aboutImage from '../../../assets/images/about-image.jpg'

const AboutUsSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h4 className={styles.aboutSubtitle}>{t("about_us.subtitle")}</h4>
        <h2 className={styles.aboutTitle}>{t("about_us.title")}</h2>
        <p className={styles.aboutDescription}>{t("about_us.text")}</p>
        <div className={styles.aboutCards}>
          <div className={styles.aboutCard}>
            <h6 className={styles.aboutTitle}>{t("about_us.card1.title")}</h6>
            <p className={styles.aboutDescription}>
              {t("about_us.card1.text")}
            </p>
          </div>
          <div className={styles.aboutCard}>
            <h6 className={styles.aboutTitle}>{t("about_us.card2.title")}</h6>
            <p className={styles.aboutDescription}>
              {t("about_us.card2.text")}
            </p>
          </div>
          <div className={styles.aboutCard}>
            <h6 className={styles.aboutTitle}>{t("about_us.card3.title")}</h6>
            <p className={styles.aboutDescription}>
              {t("about_us.card3.text")}
            </p>
          </div>
        </div>
        <div>
          <img
            src={aboutImage}
            alt={t("about_us.image_alt")}
            className={styles.aboutUsImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
