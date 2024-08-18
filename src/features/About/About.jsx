import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <h1>{t("company_history")}</h1>
      <p>{t("mission")}</p>
    </div>
  );
};

export default About;
