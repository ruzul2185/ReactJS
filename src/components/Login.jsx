import { useState } from "react";
import Input from "./Input";

const Login = () => {
  const [userData, setUserData] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const handleUserData = (event) => {
    const { key, value } = event.target;
    setUserData({ ...userData, [key]: value });
  };
  return (
    <form>
      <h1>Login</h1>
      <Input
        label="Username"
        type="text"
        placeholder="Enter Username"
        handleUserData={handleUserData}
      />
      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        handleUserData={handleUserData}
      />
      <div
        onClick={() => {
          setShowPassword((prev) => !prev);
        }}
      >
        Show Password
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
