import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slice/authSlice";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  const fileRef = useRef(null);

  // useEffect(() => {
  //   console.log(fileRef.current);
  // }, [fileRef]);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const [showPassword, setShowPassword] = useState(false);

  const handleUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const getFile = () => {
    fileRef.current.click();
  };

  const submitHandler = () => {
    dispatch(login(userData));
  };
  return (
    <div style={{ position: "relative" }}>
      <h1>Login</h1>
      <Input
        label="username"
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
        label="password"
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
      {!auth.loading ? (
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Login;
