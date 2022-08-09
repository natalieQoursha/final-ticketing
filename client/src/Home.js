import "../src/index.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import back from "../src/images/bck.png";

const Home = () => {
  const history = useNavigate();
  const handleLogout = (e) => {
    sessionStorage.removeItem("user");
    history("/signIn");
  };
  return (
    <div className="Home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4>Home Page</h4>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        Estarta is a global Network Engineering and Information Technology
        company, specialized in comprehensive outsourced technical and premium
        service solutions. Throughout our 30 years of operation, we have
        delivered expertise to clients through a wide range of services which
        have supported our clients' success.
      </h3>
    </div>
  );
};
export default Home;
