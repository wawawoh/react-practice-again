import { useState } from "react";

export default function Task1() {
  const [counter, setCounter] = useState(0);
  const decrease = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>This is a counter</h1>
      <p>{counter}</p>
      <button onClick={decrease}>decrease 1 to the counter</button>
      <button onClick={increase}>add 1 to the counter</button>
    </>
  );
}
