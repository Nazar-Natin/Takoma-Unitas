import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-body">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="modal-content">
          <div className="modal-map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11136.868325589778!2d21.2179635!3d45.7467938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d777f30c683%3A0xaa3b33bbb47c5f5f!2sStrada%20Mo%C8%9Bilor%207%2C%20Timi%C8%99oara%2C%20Romania!5e0!3m2!1sen!2ses!4v1724016116714!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="modal-form">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
