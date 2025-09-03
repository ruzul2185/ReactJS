import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
const Register = () => {
  const inputRef = useRef(null);

  const { theme, toggleTheme } = useTheme();
  // console.log(useTheme());

  const printValue = (event) => {
    console.log(inputRef.current?.value);
    inputRef.current.value = event.target.value;
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={printValue} />
      <button>Print</button>
      <button
        style={
          theme == "light"
            ? { backgroundColor: "blue" }
            : { backgroundColor: "red" }
        }
        onClick={toggleTheme}
      >
        Theme
      </button>
    </div>
  );
};

export default Register;
