import { useState } from "react";

function Task5() {
  const [greeting, setGreeting] = useState(false);
  return (
    <button onClick={() => setGreeting((prev) => !prev)}>
      {greeting ? "hello" : "goodbyte"}
    </button>
  );
}
export default Task5;
