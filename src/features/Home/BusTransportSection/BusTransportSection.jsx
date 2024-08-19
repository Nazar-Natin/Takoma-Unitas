import React from "react";
import styles from "./busTransportSection.module.css";
import { useTranslation } from "react-i18next";

export default function BusTransportSection() {
  const { t } = useTranslation("home");

  return (
    <section className={styles.transportSection}>
      <div className={styles.transportContainer}>
        <div>
          <img
            src="/images/transport-image.jpg"
            alt={t("bus_transport.image_alt")}
            className={styles.transportImg}
          />
        </div>
        <div className={styles.transportText}>
          <h2 className={styles.transportTitle}>{t("bus_transport.title")}</h2>
          <p className={styles.transportDescription}>
            {t("bus_transport.text")}
          </p>
          <ul className={styles.transportList}>
            <li>{t("bus_transport.list_item1")}</li>
            <li>{t("bus_transport.list_item2")}</li>
            <li>{t("bus_transport.list_item3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
