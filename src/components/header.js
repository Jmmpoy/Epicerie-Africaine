import React from "react";
import "../assets/style/header.scss";
import Social from "../components/social";
import { motion } from "framer-motion";

export default function header() {
  const logoimg = require("../assets/logo_large.png");
  // const hero = require("../assets/gamme/bg2.jpg");

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
      },
    },
  };

  return (
    <motion.header>
      <nav className="header-nav">
        <motion.ul initial="hidden" variants={variants} animate="show">
          <motion.li className="logo" variants={item}>
            <a href="https://l-epicerie-africaine.afrikrea.com/fr">
              <img src={logoimg} alt="logo" />
            </a>
          </motion.li>
          <div className="header-nav-block">
            <motion.li variants={item} className="produits" id="products">
              <a href="#products">produits</a>
            </motion.li>
            <motion.li className="avis" variants={item} id="avis">
              <a href="#avis">avis</a>
            </motion.li>
            <motion.li variants={item} className="contact" id="contact">
              <a href="#contact">contact</a>
            </motion.li>
          </div>
        </motion.ul>
      </nav>
      <div className="header-title">
        {/* <img src={hero} /> */}
        <motion.h1
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          animate={{ opacity: 1, x: 0 }}
        >
          L'épicerie Africaine
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
          animate={{ opacity: 1, x: 0 }}
        >
          De l'artisan à votre assiette.
        </motion.h4>
        <Social variants={variants} item={item} />
      </div>
    </motion.header>
  );
}
