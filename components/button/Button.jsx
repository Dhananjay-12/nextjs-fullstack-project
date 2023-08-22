import Link from "next/link";
import styles from "./Button.module.css";

function Button({ children, url }) {
  return (
    <Link href={url}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
}

export default Button;
