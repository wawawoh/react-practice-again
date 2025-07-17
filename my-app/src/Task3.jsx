import { useEffect, useState } from "react";

export default function Task3() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(["Buy Milk", "read mandy fanfic"]);

  const deleteTodo = (indexToDelete) => {
    setTaskList((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  const submit = (e) => {
    e.preventDefault();
    setTaskList((prev) => [...prev, task]);
    setTask("");
  };

  return (
    <>
      <h1>this is a todo list hehe</h1>
      <form onSubmit={submit}>
        <label htmlFor="task"> Task: </label>
        <input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          id="task"
          name="task"
          value={task}
        />

        <button type="submit">submit</button>
      </form>

      <ul>
        {taskList.map((value, index) => {
          return (
            <li key={index}>
              <span>{value}</span>
              <button onClick={() => deleteTodo(index)}>done</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
