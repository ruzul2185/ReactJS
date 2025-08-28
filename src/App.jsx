import Input from "./components/Input";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const handleUserData = (event) => {
    const { key, value } = event.target;
    setUserData({ ...userData, [key]: value });
  };

  return (
    <section id="about">
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
    </section>
  );
};

export default App;
