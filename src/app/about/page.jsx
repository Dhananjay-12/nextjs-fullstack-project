import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../../components/button/Button";
// import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            This is a leading software company renowned for its expertise in
            delivering tailor-made solutions that cater exclusively to the
            specific requirements of our clients and users. Our philosophy
            revolves around close engagement, careful development, and dedicated
            support, resulting in software that not only meets but exceeds
            expectations. Our commitment is to empower businesses with the tools
            they need to thrive in today&apos;s dynamic technological landscape.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Here, our core focus is on creating software solutions that are as
            unique as the businesses they serve. Our skilled team of developers,
            designers, and experts collaborate closely with clients to
            understand their distinct challenges and goals.
            <span className={styles.list}>
              <span> 😶‍🌫️Creative Illustrations😶‍🌫️</span>
              <span className={styles.listItem}>👉Dynamic Websites</span>
              <span className={styles.listItem}>👉Fast and Handy</span>
              <span className={styles.listItem}>👉Mobile Apps</span>
            </span>
            <Button url="/contact">Contact Us</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
