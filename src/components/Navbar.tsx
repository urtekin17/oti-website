import { Link } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import "./Navbar.css";
function Navbar(): JSX.Element {
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };  
  return (
    <nav className="navbar" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
         <div className="logo-container">
          <img src="/navbarlogo.png" alt="Urtechsoft Logo" className="nav-logo" />
        </div>
      <div className="nav-links">
        <Link to="/"> {t("home_title")} </Link> |{" "}
        <Link to="/services"> {t("services_title")} </Link> |{" "}
        <Link to="/contact"> {t("contact_title")} </Link>
      </div>
       <div className="lang-switch">
        <button onClick={() => changeLanguage("tr")} className="lang-btn">TR</button>
        <button onClick={() => changeLanguage("en")} className="lang-btn">EN</button>
      </div>
    </nav>
  );
}

export default Navbar;
