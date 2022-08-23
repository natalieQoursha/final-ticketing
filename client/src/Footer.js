import SocialFollow from "../src/SocialFollow";

import { UserContext } from "./App";

import { useState } from "react";

import { useContext } from "react";

import React, { Component }  from 'react';


const Footer = () => {

  const user = useContext(UserContext);



  return (

    <div>

      <div className="flex-wrapper">

        <div className="footer">

          <SocialFollow />

        </div>

      </div>

    </div>

  );

};

export default Footer;