// import Input from "./components/Input";
// import { useState } from "react";

// const App = () => {
//   const [userData, setUserData] = useState({});

//   const [showPassword, setShowPassword] = useState(false);

//   const handleUserData = (event) => {
//     const { key, value } = event.target;
//     setUserData({ ...userData, [key]: value });
//   };

//   return (
//     <section id="about">
//       <form>
//         <h1>Login</h1>
//         <Input
//           label="Username"
//           type="text"
//           placeholder="Enter Username"
//           handleUserData={handleUserData}
//         />
//         <Input
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter Password"
//           handleUserData={handleUserData}
//         />
//         <div
//           onClick={() => {
//             setShowPassword((prev) => !prev);
//           }}
//         >
//           Show Password
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// };

import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  //     getter  setter             initial state
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((currentState) => currentState + 1);
    // it takes time to update the state
    // scheduler re-render cycle
    console.log(count);
  };

  // Logger
  const Logger = (msg) => {
    console.log(msg);
  };

  const dummy = [
    { name: "Ruzul", job: "SDE" },
    { name: "John", job: "Manager" },
    { name: "Doe", job: "Designer" },
  ];

  return (
    <div>
      <Card name="Ruzul" job="SDE" data={Logger} />
      {/* {dummy.map((item, index) => (
        <Card key={index} name={item.name} job={item.job} data={Logger} />
      ))} */}

      <h1>{count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
