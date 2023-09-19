import React, { useEffect } from "react";
import styles from "./IntroSection.module.scss";
import BlobAnimation from "../Animations/BlobAnimation";
import { Button } from "@mui/material";
import { sectionTypes } from "../Main/types";
import IntroFooter from "./footer/IntroFooter";

interface IntroProps {
  scrollTo: (section: sectionTypes) => void;
}
const Intro: React.FC<IntroProps> = ({ scrollTo }) => {
  return (
    <div className={styles.introSection}>
      <div className={styles.introContainer}>
        <div className={styles.introText}>
          <p className={styles.introHeading}>
            Hi, i'm<span className={styles.highlight}> Alex</span>
            <br />
            <span
              className={`font-bold font text-6xl w-full  align-middle justify-center`}
            >
              A React Developer
            </span>
          </p>

          <p className={styles.introDescription}>
            React JS, React Native developer
          </p>
          <Button
            variant="contained"
            style={{
              borderRadius: 15,
              height: 50,
              width: "50%",
              boxShadow: "0px 5px 25px 1px #8b64ed",
            }}
            onClick={() => {
              scrollTo("projects");
            }}
          >
            Go to projects
          </Button>
        </div>

        <div className={styles.introImage}>
          <section>
            <BlobAnimation />
          </section>
        </div>
      </div>
      <section>
        <IntroFooter />
      </section>
    </div>
  );
};

export default Intro;
