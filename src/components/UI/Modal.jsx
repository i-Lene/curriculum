import React from "react";
import styles from "./Modal.module.scss";

function Modal({ message, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        <button className="secondary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
