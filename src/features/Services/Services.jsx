import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Services.module.css"

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <div className={styles.servicesContainer}>
      <h1>{t('servicesPage.title')}</h1>
      
      <section>
        <h2>{t('servicesPage.transportServices.title')}</h2>
        <p>{t('servicesPage.transportServices.description')}</p>
      </section>

      <section>
        <h2>{t('servicesPage.customsAndLogistics.title')}</h2>
        <p>{t('servicesPage.customsAndLogistics.description')}</p>
      </section>

      <section>
        <h2>{t('servicesPage.export.title')}</h2>
        <p>{t('servicesPage.export.description')}</p>
      </section>

      <section>
        <h2>{t('servicesPage.import.title')}</h2>
        <p>{t('servicesPage.import.description')}</p>
      </section>

      <section>
        <h2>{t('servicesPage.mainRoutes.title')}</h2>
        <p>{t('servicesPage.mainRoutes.description')}</p>
      </section>

      <section>
        <h2>{t('servicesPage.busRoutes.title')}</h2>
        <p>{t('servicesPage.busRoutes.description')}</p>
      </section>
    </div>
  );
};

export default Services;
