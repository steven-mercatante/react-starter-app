import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function TodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim() === "") return;
    createTodo(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Enter Todo ..."
        value={task}
        onChange={handleChange}
      />
    </form>
  );
}
