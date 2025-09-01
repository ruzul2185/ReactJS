// import Input from "./components/Input";
// import { useState } from "react";
// import Login from "./components/Login";

// const App = () => {
//   return (
//     <section id="about">
//       <Login />
//     </section>
//   );
// };

import Card from "./components/Card";
import Post from "./components/Post";
import { useState, useEffect } from "react";

const App = () => {
  //     getter  setter             initial state
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await data.json();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

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
      {posts.map((post) => (
        <Post title={post.title} />
      ))}
    </div>
  );
};

export default App;
