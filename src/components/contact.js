import React from "react";
import "../assets/style/contact.scss";
import { motion } from "framer-motion";

export default function contact() {
  const logo = require("../assets/logo_small.png");
  return (
    <motion.section className="contact-section" id="contact">
      <div className="contact-block">
        <div className="contact-text">
          <h4>contact</h4>
          <p>contact@lepicerieafricaine.fr</p>
          <p>+33 6 29 33 26 36 </p>
        </div>
        <div className="contact-logo">
          <img src={logo} alt="logo bis" />
        </div>
      </div>
    </motion.section>
  );
}
