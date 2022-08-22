import SocialFollow from "../src/SocialFollow";
import { UserContext } from "./App";
import React, { useState } from "react";
import { useContext } from "react";

const Footer = ({ setLoggedUser }) => {
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
