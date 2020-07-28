import React from "react";
import { motion } from "framer-motion";
export default function social(props) {
  console.log(props.variants);

  return (
    <>
      <motion.ul className="socials">
        <motion.li
          className="shop"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <a href="https://l-epicerie-africaine.afrikrea.com/fr">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </motion.li>

        <motion.li
          className="mail"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        >
          <a href="mailto:contact@lepicerieafricaine.fr">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </motion.li>

        <motion.li
          className="instagram"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "backInOut", delay: 1 }}
        >
          <a href="https://www.instagram.com/lepicerieafricaine/">
            <i className="fab fa-instagram"></i>
          </a>
        </motion.li>
      </motion.ul>
    </>
  );
}
