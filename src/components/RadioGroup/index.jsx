import * as React from "react";
// Styles
import styles from "./index.module.scss"

// type of data:

// interface RadioData {
//   key: string;
//   title: string;
// }


const RadioGroup = ({ data, onSelect }) => {
  const [selectedKey, setSelectedKey] = React.useState(data[0].key)
  function handleClick(key) {
    setSelectedKey(key)
    onSelect(key)
  }

  return (
    <React.Fragment>
      {data.map((option, index) => (
        <div key={index} className={styles["option"]}>
          <input
            value={option.key}
            type="radio"
            checked={option.key === selectedKey}
            className={styles["option__checkbox"]}
            onChange={() => handleClick(option.key)}
          />
          <label className={styles["option__label"]} onClick={() => handleClick(option.key)}>{option.title}</label>
        </div>
      ))}
    </React.Fragment>
  );
};

export default RadioGroup;

