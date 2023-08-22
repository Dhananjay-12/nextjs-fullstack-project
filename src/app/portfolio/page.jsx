import Link from "next/link";
import styles from "./page.module.css";
function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.cardTitle}>Illustrations</span>
        </Link>
        <Link href="portfolio/websites" className={styles.item}>
          <span className={styles.cardTitle}>Websites</span>
        </Link>
        <Link href="portfolio/applications" className={styles.item}>
          <span className={styles.cardTitle}>Applications</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
