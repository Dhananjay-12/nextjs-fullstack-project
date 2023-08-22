import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Dhananjay. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          className={styles.icons}
          src="/youtube.svg"
          width={30}
          height={30}
          alt="dhananjay's social"
        />
        <Image
          src="/twitter.svg"
          className={styles.icons}
          width={30}
          height={30}
          alt="dhananjay's social"
        />
        <Image
          className={styles.icons}
          src="/github.svg"
          width={30}
          height={30}
          alt="dhananjay's social"
        />
        <Image
          src="/facebook.svg"
          className={styles.icons}
          width={30}
          height={30}
          alt="dhananjay's social"
        />
      </div>
    </div>
  );
}

export default Footer;
