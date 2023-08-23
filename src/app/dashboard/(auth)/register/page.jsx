"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      console.log(res);

      if (res.status === 201) {
        router.push("/dashboard/login");
      }
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form className={styles.form}>
        {error && (
          <div className={styles.error}>
            We encountered an error while registering you in
          </div>
        )}
        <div>
          <input
            placeholder="Name"
            type="text"
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.btn} onClick={handleSubmit}>
          Register
        </button>
      </form>
      <div>
        <Link href="/dashboard/login" className={styles.login}>
          Login with an existing account
        </Link>
      </div>
    </div>
  );
}

export default Page;
