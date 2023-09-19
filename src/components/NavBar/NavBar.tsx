import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { sectionTypes } from "../Main/types";

interface NavbarProps {
  scrollTo: (section: sectionTypes) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <button
              className={styles.navbarLink}
              onClick={() => scrollTo("intro")}
            >
              Home
            </button>
          </li>
          <li
            className={styles.navbarItem}
            onClick={() => scrollTo("projects")}
          >
            <button className={styles.navbarLink}>Projects</button>
          </li>
          <li className={styles.navbarItem}>
            <button className={styles.navbarLink}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
