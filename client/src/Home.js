import "../src/index.css";
import "../src/Home.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

      <div class="imagee">
      <div class="image"><img src={Imagee} width="500" height="300"/></div>
      </div>

        

    </div>

//     <div class="container">
//     <div class="text a">Solving Your</div>
//     <div class="text b ">Tickets right</div>
//     <div class="text c">A powerful  easy system for tracking,</div>
//     <div class="text d">and solving customer service tickets</div>
//     <div class="image"><img src={Imagee} width="600" height="300"/></div>
    

// </div>
  );
};
export default Home;
