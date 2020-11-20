import * as React from "react";
// Styles
import styles from "./index.module.scss";

const Loading = ({ visible }) => {
  return (
    <div>
      {visible ? (
        <div className={styles["loading"]}>
          <div className={styles["loading__spinner"]}></div>
        </div>
      ) : null}
    </div>
  );
};

export default Loading;
