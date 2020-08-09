import React from "react";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

const Home = () => {
  return (
    <>
      <div style={{ width: "50%" }}>
        <Login />
      </div>
      <div style={{ margin: "0 auto 0 auto" }}>
        <Register />
      </div>
    </>
  );
};

export default Home;
