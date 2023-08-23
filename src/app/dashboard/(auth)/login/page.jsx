"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signIn("credentials", { email, password });
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      <h1>LOGIN</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && (
          <div className={styles.error}>
            We encountered an error while logging you in
          </div>
        )}

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
        <button className={styles.btn} onClick={() => signIn("credentials")}>
          Login
        </button>
      </form>
      <div>
        <Link href="/dashboard/register" className={styles.login}>
          Create a new Account?
        </Link>
      </div>
    </div>
  );
}

export default Page;
