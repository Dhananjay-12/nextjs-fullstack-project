import Image from "next/image";
import styles from "./page.module.css";
import Button from "../../../components/button/Button";
function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          {/* <Image src="/contact.png" alt="" fill={true} /> */}
        </div>
        <form className={styles.form}>
          <h1 className={styles.title}>Let&apos;s keep in touch</h1>
          <input className={styles.input} type="text" placeholder="Your name" />
          <input
            className={styles.input}
            type="email"
            placeholder="Your email"
          />
          <textarea
            className={styles.textBox}
            type="text"
            col="30"
            row="10"
            placeholder="Your message goes here..."
          />
          <Button url="#">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
