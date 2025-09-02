import { useEffect, useRef, useState } from "react";
import Input from "./Input";

const Login = () => {
  const [userData, setUserData] = useState({});

  const fileRef = useRef(null);

  useEffect(() => {
    console.log(fileRef.current);
  }, [fileRef]);

  const [showPassword, setShowPassword] = useState(false);

  const handleUserData = (event) => {
    const { key, value } = event.target;
    setUserData({ ...userData, [key]: value });
  };

  const getFile = () => {
    fileRef.current.click();
  };
  return (
    <div style={{ position: "relative" }}>
      <h1>Login</h1>
      <Input
        label="Username"
        type="text"
        placeholder="Enter Username"
        handleUserData={handleUserData}
      />
      <input ref={fileRef} type="file" style={{ display: "none" }} />
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          color: "white",
          backgroundColor: "blueviolet",
          cursor: "pointer",
        }}
        onClick={() => {
          getFile();
        }}
      >
        Upload Photo
      </div>
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
    </div>
  );
};

export default Login;
