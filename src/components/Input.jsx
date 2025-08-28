import styles from "./Input.module.css";
import { useState } from "react";

// props = {
//  label: "username",
//  type: "text"
// }

const Input = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    props.handleUserData(event);
    setValue(event.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{props.label}</label>
      <input
        name={props.label}
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
