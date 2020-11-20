import * as React from "react";
// Styles
import styles from "./index.module.scss";


const Modal = ({ visible, onOkClicked, text }) => {
  if (visible) {
    return (
      <div className={styles["modal"]}>
        <h1>{text}</h1>
        <button onClick={onOkClicked}>OK!</button>
      </div>
    );
  }
  return null;
};

export default Modal;