import "../src/index.css";
import "../src/Home.css";
import React, { useState, useEffect, Component } from "react";
import Image from "../src/images/homeImg.png";
import { UserContext } from "../src/App";
import { useContext } from "react";

const userz = JSON.parse(sessionStorage.getItem("user")) || undefined;

const Home = ({ setLoggedUser }) => {
  const user = useContext(UserContext);
  return (
    <div class="container">
      <div class="text1">
        Solving Your
        <br />
        Tickets right
        <div class="text2">
          A powerful easy system for tracking,
          <br></br>
          and solving customer service tickets
        </div>
      </div>

      <div class="homeImage">
        <img class="homeImage" src={Image} />
      </div>
    </div>
  );
};
export default Home;
