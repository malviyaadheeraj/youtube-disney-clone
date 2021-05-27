import React from "react";
import "./Login.css";
import imgOne from "../images/cta-logo-one.svg";
import imgTwo from "../images/cta-logo-two.png";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__cta">
          <img src={imgOne} alt="" className="login__ctaLogoOne" />
          <Link>GET ALL THERE</Link>
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img src={imgTwo} alt="" className="login__ctaLogoTwo" />
        </div>
        <div className="login__background"></div>
      </div>
    </div>
  );
};

export default Login;
