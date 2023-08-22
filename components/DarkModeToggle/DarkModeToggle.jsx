import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import styles from "./DarkModeToggle.module.css";

function DarkModeToggle() {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌛</div>
      <div className={styles.icon}>🌞</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: 0 } : { right: 0 }}
        onClick={() => toggle()}
      ></div>
    </div>
  );
}

export default DarkModeToggle;
