import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <div className="contact-card">
        <h1>{t("contact_title")}</h1>
        <p>{t("contact_text")}</p>
        <p>
          <strong>Email:</strong> urtechsoft@gmail.com
        </p>
        <a
          href="https://www.linkedin.com/in/nuri-urtekin-8b31ba152/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
