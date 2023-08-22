import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "../../components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          <span className={styles.coolQuote}>&ldquo;</span>
          Turning your ideas into reality. We bring together the teams from
          global tech industry.
          <span className={styles.coolQuote}>&rdquo;</span>
        </p>
        <Button url="/portfolio">See our works</Button>
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt="hero image" className={styles.img} />
    </div>
  );
}
