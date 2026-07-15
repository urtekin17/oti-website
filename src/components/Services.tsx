import React from "react";
import "./Services.css";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="services">
      <h1>{t("services_title")}</h1>
      <p>{t("services_paragraph1")}</p>
      <p>{t("services_paragraph2")}</p>
    </section>
  );
};

export default Services;
