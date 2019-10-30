import React, { useState } from "react";
import { Box, Container, List } from "@material-ui/core";
import TodoItem from "components/TodoItem";
import TodoForm from "components/TodoForm";

function App() {
  /**
   * Using hardcoded data for demo purposes. Normally this would be stored
   * in a database or even local storage, depending on the needs.
   */
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
    /**
     * We could use the index of the item in the array as it's ID, but
     * I prefer using something more explicit. In a real world app, this would
     * be a uuid
     */
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
      </Box>
    </Container>
  );
}

export default App;
