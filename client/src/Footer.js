import SocialFollow from "../src/SocialFollow";
import { UserContext } from "../src/App";
import React, { useState } from "react";

const Footer = ({ setLoggedUser }) => {
  return (
    <UserContext.Provider value={setLoggedUser}>
      <div>
        <div className="flex-wrapper">
          <div className="footer">
            <SocialFollow />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};
export default Footer;
