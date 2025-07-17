import { useEffect, useState } from "react";

export default function Task3() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList((prev) => [...prev, task]);
    setTask("");
  };
  const removeTask = (indexToRemove) => {
    const newList = taskList.filter((_, index) => {
      return index !== indexToRemove;
    });
    setTaskList(newList);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="task">
          Enter a task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">submit</button>
        </label>
      </form>
      <ul>
        {taskList.map((task, index) => {
          return (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => removeTask(index)}>remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
