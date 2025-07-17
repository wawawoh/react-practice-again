import { useEffect, useState } from "react";

export default function Task4() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("https not found");
        }
        let data = await response.json();
        setData(data);
        setLoaded(true);
      } catch (error) {
        console.error("there is an error", error);
      }
    };
    fetchData();
  }, []);

  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <h1>this is a fethc request</h1>
      <p>this is the results</p>
      <p>{loaded ? JSON.stringify(data) : "currentyl loading "}</p>
    </>
  );
}
