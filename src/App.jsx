import Input from "./components/Input";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Photo from "./pages/photo";

import { BrowserRouter, Routes, Route } from "react-router";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <section>
              <Login />
            </section>
          }
        />
        <Route
          path="/register"
          element={
            <section>
              <Register />
            </section>
          }
        />
        <Route path="/photo/:id" element={<Photo />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

// import List from "./components/List";

// const App = () => {
//   return <List />;
// };

export default App;
