import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.services}>
      <div className={styles.servicesContainer}>
        <h4 className={styles.servicesSubtitle}>{t("services.subtitle")}</h4>
        <h2 className={styles.servicesTitle}>{t("services.title")}</h2>
        <p className={styles.servicesDescription}>{t("services.text")}</p>

        <div className={styles.servicesCards}>
          <div className={styles.serviceCard}>
            <h4 className={styles.serviceTitle}>{t("services.card1.title")}</h4>
            <p className={styles.serviceDescription}>
              {t("services.card1.text")}
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h4 className={styles.serviceTitle}>{t("services.card2.title")}</h4>
            <p className={styles.serviceDescription}>
              {t("services.card2.text")}
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h4 className={styles.serviceTitle}>{t("services.card3.title")}</h4>
            <p className={styles.serviceDescription}>
              {t("services.card3.text")}
            </p>
          </div>
        </div>

        <div className={styles.servicesButtons}>
          <Link to="/services" className={styles.btnLearnMore}>
            {t("services.learn_more")}
          </Link>
          <a href="#contactUs" className={styles.btnContactUs}>
            {t("services.contact_us")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
