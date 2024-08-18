import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <div>
      <h1>{t("services_heading")}</h1>
      <p>{t("services_description")}</p>
    </div>
  );
};

export default Services;
