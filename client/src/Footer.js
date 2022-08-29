import React, { useContext }   from 'react';
import SocialFollow from "../src/SocialFollow";
import { UserContext } from "./App";

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
