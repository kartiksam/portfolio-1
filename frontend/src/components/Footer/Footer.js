import React, { useState } from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

import logo from "../../assets/mylogo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "5f8993c6-abd5-46fa-b422-9b7604423e5f");
    formData.append("email", email);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" className="small-logo" />
          <p>I'm a MERN Stack Developer from India.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>
      {message && <p className="footer-message">{message}</p>}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Kartik Sharma, All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
