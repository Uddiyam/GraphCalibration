import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.TextWrap}>
        <span className={styles.Title}>그래프치과</span>
        <p style={{ color: "#D5C67A" }}>여러분의 그래프를 교정해드립니다</p>
      </div>
    </div>
  );
}
