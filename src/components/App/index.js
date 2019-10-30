import React, { useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  makeStyles
} from "@material-ui/core";
import MyComponent from "components/MyComponent";

function TodoForm({ createTodo }) {
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

function TodoItem({ id, task, isComplete, toggleTodo }) {
  const classes = useStyles();

  function handleClick() {
    toggleTodo(id);
  }

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText
        primary={task}
        className={isComplete ? classes.completed : ""}
      />
    </ListItem>
  );
}

const useStyles = makeStyles(theme => ({
  completed: {
    textDecoration: "line-through"
  }
}));

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
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos(todos.concat({ id, task, isComplete: false }));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
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
            <TodoItem
              id={todo.id}
              task={todo.task}
              isComplete={todo.isComplete}
              toggleTodo={toggleTodo}
            />
          ))}
        </List>
        {/* <MyComponent /> */}
      </Box>
    </Container>
  );
}

export default App;
