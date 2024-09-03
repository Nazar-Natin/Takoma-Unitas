import React from "react";
import { useTranslation } from "react-i18next";
import legalImage from "../../../assets/images/legal-image.jpg";
import styles from "./LegalServicesSection.module.css";

const LegalServicesSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.legalServicesSection}>
      <div className={styles.legalServicesContainer}>
      <div className={styles.legalServicesText}>
        <h4 className={styles.legalServicesSubtitle}>{t("legalServices.subtitle")}</h4>
        <h2 className={styles.legalServicesTitle}>{t("legalServices.title")}</h2>
        <p className={styles.legalServicesDescription}>{t("legalServices.text")}</p>
        </div>
        <img src={legalImage} alt={t("legalServices.image_alt")} className={styles.legalServicesImg} />
      </div>
    </section>
  );
};

export default LegalServicesSection;
