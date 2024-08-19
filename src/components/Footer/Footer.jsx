import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            Takoma Unitas
          </Link>
        </div>
        <ul className={styles.navFooter}>
          <li className={styles.navFooterItem}>
            <Link to="/about" className={styles.navFooterLink}>
              {t("about")}
            </Link>
          </li>
          <li className={styles.navFooterItem}>
            <Link to="/services" className={styles.navFooterLink}>
              {t("services")}
            </Link>
          </li>
          <li className={styles.navFooterItem}>
            <a href="#contactUs" className={styles.navFooterLink}>
              Contact Us
            </a>
          </li>
        </ul>
        <ul className={styles.socialMedia}>
          <li className={styles.socialMediaItem}>
            <a
              href="https://www.facebook.com/TAKOMAUNITAS"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              <img src="./assets/icons/Facebook.svg" alt="" />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a href="#" aria-label="Twitter" className={styles.socialLink}>
              <img src="./assets/icons/Instagram.svg" alt="" />
            </a>
          </li>
          <li className={styles.socialMediaItem}>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <img src="./assets/icons/Linkedin.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <hr className={styles.footerDivider} />
      <div className={styles.footerContainer}>
        <p className={styles.footerCopyright}>
          Copyright&copy; 2024 All Rights Reserved. Takoma Unitas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
