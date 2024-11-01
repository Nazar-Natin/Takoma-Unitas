import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/Modal/Modal";
import Form from "../../../components/Form/Form";
import styles from "./contactUsSection.module.css";
import contactImage from "../../../assets/images/contact-image.jpg";
import Email from "../../../assets/icons/Email.svg";
import Phone from "../../../assets/icons/Phone.svg";
import Location from "../../../assets/icons/Location.svg";

const ContactUsSection = () => {
  const { t } = useTranslation("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={styles.contactUsSection} id="contactUs">
      <div className={styles.contactUsContent}>
        <div className={styles.contactUsText}>
          <h2>{t("contact_us.title")}</h2>
          <p>{t("contact_us.text")}</p>
          <button onClick={openModal}>{t("contact_us.button")}</button>
        </div>
        <div className={styles.contactUsImage}>
          <img src={contactImage} alt={t("contact_us.image_alt")} />
        </div>
      </div>

      <div className={styles.contactUsCards}>
        <div className={styles.contactCard}>
          <img src={Email} alt={t("contact_us.email.title")} />
          <h3>{t("contact_us.email.title")}</h3>
          <p>infotakomaunitas@gmail.com</p>
          <p>t.fefchak@gmail.com</p>
          <p>volodymyr.natin@gmail.com</p>
          <a href="mailto:volodymyr.natin@gmail.com">
            {t("contact_us.email.link")}
          </a>
        </div>

        <div className={styles.contactCard}>
          <img src={Phone} alt={t("contact_us.phone.title")} />
          <h3>{t("contact_us.phone.title")}</h3>
          <p>+372 5767 3831</p>
          <p>+38 066 70 18 415</p>
          <p>+38 098 60 00 123</p>
          <a href="tel:+380986000123">{t("contact_us.phone.link")}</a>
        </div>

        <div className={styles.contactCard}>
          <img src={Location} alt={t("contact_us.address.title")} />
          <h3>{t("contact_us.address.title")}</h3>
          <p>Strada Moților 7 Timișoara, Romania</p>
          <p>Holovna St, 119, Chernivtsi, Ukraine</p>
          <a
            href="https://g.co/kgs/MBGq4DW"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact_us.address.link")}
          </a>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form />
      </Modal>
    </section>
  );
};

export default ContactUsSection;
