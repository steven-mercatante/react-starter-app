import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  List,
  ListItem,
  ListItemText,
  TextField
} from "@material-ui/core";
import MyComponent from "components/MyComponent";

function TodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    console.log("handleChange", event.target.value);
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
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

function TodoItem({ id, task, toggleTodo }) {
  function handleClick() {
    toggleTodo(id);
  }

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText primary={task} />
    </ListItem>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Start React project",
      isComplete: true
    },
    {
      id: 2,
      task: "Organize party",
      isComplete: false
    }
  ]);

  function createTodo(task) {
    console.log("createTodo", task);
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos(todos.concat({ id, task, isComplete: false }));
  }

  function toggleTodo(id) {
    console.log("toggleTodo", id);
  }

  return (
    <Container>
      <Box
        my={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <TodoForm createTodo={createTodo} />
        <List>
          {todos.map(todo => (
            <TodoItem id={todo.id} task={todo.task} toggleTodo={toggleTodo} />
          ))}
        </List>
        {/* <MyComponent /> */}
      </Box>
    </Container>
  );
}

export default App;
