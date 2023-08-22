"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

function Dashboard() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  //API Call UseEffect
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //         cache: "no-store",
  //       });
  //       const data = await res.json();
  //       if (!res.ok) setError(true);

  //       setData(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };
  //   getData();
  // }, []);

  //Api call SWR
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div>Dashboard</div>;
}

export default Dashboard;
