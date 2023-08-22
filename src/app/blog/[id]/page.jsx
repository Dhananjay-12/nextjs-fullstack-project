import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos/" + id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return notFound();
    }
    return res.json();
  } catch (err) {
    console.error(err.message);
  }
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  if (!data) return <div>loading</div>;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>description</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/12486829/pexels-photo-12486829.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>User</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/12486829/pexels-photo-12486829.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Content</p>
      </div>
    </div>
  );
};

export default BlogPost;
