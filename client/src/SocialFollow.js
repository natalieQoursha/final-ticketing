import React, { useContext } from "react";
import "./SocialFollow.css";
import { MdContactSupport } from "react-icons/ai";
import { UserContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme, useThemeUpdate } from "./UserContext";

export default function SocialFollow({ setLoggedUser }) {
  return (
    <UserContext.Consumer>
      <div class="social-container">
        <a
          href="https://www.facebook.com/Estarta.Solutions"
          target="blank"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://twitter.com/Estarta"
          target="blank"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a
          href="https://www.instagram.com/accounts/login/?next=/estartasolutions/"
          target="blank"
          className="instagram social"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="red !important"
          />
        </a>
      </div>
    </UserContext.Consumer>
  );
}
