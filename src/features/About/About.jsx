import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <h1>{t('aboutPage.title')}</h1>
      <section>
        <p>{t('aboutPage.description')}</p>
      </section>
    </div>
  );
};

export default About;
