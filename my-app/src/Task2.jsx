import { useState } from "react";

export default function Task2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("empty name try again");
    } else {
      alert("her name is" + name);
    }
  };
  return (
    <>
      <h2>This is a form input update thing</h2>
      <form onSubmit={handleSubmit}>
        <label for="fname"> First Name: </label> <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="fname"
          name="fname"
        />
        <br />
        <label for="email"> Email: </label> <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          name="email"
        />
        <button type="submit">submit</button>
      </form>
      <p>This is the name: {name}</p>
      <p>this is the email: {email}</p>
    </>
  );
}
