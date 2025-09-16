import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { NavLink, useParams, useSearchParams } from "react-router";
const Register = () => {
  const inputRef = useRef(null);

  const { theme, toggleTheme } = useTheme();
  // console.log(useTheme());

  const printValue = (event) => {
    console.log(inputRef.current?.value);
    inputRef.current.value = event.target.value;
  };

  // localhost:5173/product/mango?color=blue&size=small

  const id = useParams();
  console.log(id);
  // fetch data of apple, then show this
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
      <NavLink to="/login">Go to Login</NavLink>
    </div>
  );
};

export default Register;
