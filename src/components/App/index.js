import React, { useState } from "react";
import { Box, Container, List } from "@material-ui/core";
import TodoItem from "components/TodoItem";
import TodoForm from "components/TodoForm";

function App() {
  /**
   * Using hardcoded data for demo purposes. Normally this would be stored
   * in a database or even local storage, depending on the needs.
   *
   * We'd fetch the todos from the external data store using `useEffect`
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

  /**
   * Use a copy of `todos` that we can reverse without potentially
   * messing up id generation based on array indices.
   */
  const visibleTodos = [...todos].reverse();

  return (
    <Container>
      <TodoForm createTodo={createTodo} />
      <Box
        my={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <List>
          {visibleTodos.map(todo => (
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
