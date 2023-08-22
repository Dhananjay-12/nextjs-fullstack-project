import styles from "./page.module.css";

import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    console.error(err.message);
  }
};

async function Blog() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>
        Dive into the Brilliant Blogs Crafted by Our Expert Team!
      </h1>
      {data?.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/14730092/pexels-photo-14730092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.url}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
