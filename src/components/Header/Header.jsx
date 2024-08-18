import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("header");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            Takoma Unitas
          </Link>
        </div>

        <nav className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>
                {t("about")}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/services" className={styles.navLink}>
                {t("services")}
              </Link>
            </li>
            <li className={styles.navItem}>
              <a href="#contactUs" className={styles.navLink}>
                {t("contact")}
              </a>
            </li>
          </ul>

          <div className={styles.languageSelector}>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className={styles.languageDropdown}
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
              <option value="uk">UK</option>
            </select>
          </div>
        </nav>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
