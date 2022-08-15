import "../src/index.css";
import "../src/Home.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Imagee from "../src/images/homeImg.png"

const Home = () => {


  return (
    <div class="container">
      <div class="text1">
        Solving Your
       
      <br/>
          Tickets right
    
        <div class="text2">

        A powerful  easy system for tracking,
        <br></br>
        and solving customer service tickets

        </div>

       
      </div>

   
      <div class="homeImage"><img class="homeImage" src={Imagee}  /></div>


        

    </div>


  );
};
export default Home;