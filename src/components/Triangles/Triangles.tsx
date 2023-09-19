import React from "react";
import styles from "./triangle.module.scss";
export default function Triangles() {
  return (
    <div className={styles.rectanglesContainer}>
      <div className={styles.rectangular_left} />
      <div className={styles.rectangular_down} />
    </div>
  );
}
