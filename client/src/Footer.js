import Images from "../src/images/about.png";
import Facebook from "../src/images/face.png";
import Email from "../src/images/email.svg";
import Insta from "../src/images/instagram.png";

const Footer = () => {
  return (
    <div>
      <div className="flex-wrapper">
        <div className="footer">
          <a
            href="https://www.facebook.com/Estarta.Solutions/"
            target={"blank"}
          >
            <img src={Facebook} width="35" height="35" />
          </a>
          <a href="https://www.instagram.com/estartasolutions">
            <img src={Insta} width="35" height="35" />
          </a>
          <a href="mailto:kareem.shaweesh077@gmail.com " target={"blank"}>
            <img src={Email} width="35" height="35" />
          </a>
          <a
            href="https://www.estartasolutions.com/Pages/About.aspx"
            target={"blank"}
          >
            <img src={Images} width="35" height="35" />
          </a>
          <h2>Copyright © Estarta Solutions 2021, Inc. All rights reserved.</h2>
        </div>
      </div>
    </div>
  );
};
export default Footer;
