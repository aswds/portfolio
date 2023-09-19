import React, { useRef } from "react";
import Intro from "../Intro/Intro";
import Navbar from "../NavBar/NavBar";
import styles from "../../styles/screen.module.scss";
import ProjectsSection from "../Projects/Projects";
import { sectionTypes } from "./types";
function MainScreen() {
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  function scrollTo(section: sectionTypes) {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.sectionContainer} `} id="intro" ref={introRef}>
        {/* <Navbar scrollTo={scrollTo} /> */}
        <Intro scrollTo={scrollTo} />
      </div>
      <div
        className={`${styles.sectionContainer} ${styles.sectionEven} `}
        id="projects"
        ref={projectsRef}
      >
        <ProjectsSection />
      </div>
    </div>
  );
}

export default MainScreen;
