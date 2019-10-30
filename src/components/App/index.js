import React, { useState } from "react";
import { Box, Container } from "@material-ui/core";
import MyComponent from "components/MyComponent";

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

  function createTodo(task) {}

  function toggleTodo(id) {}

  return (
    <Container>
      <Box
        my={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <MyComponent />
      </Box>
    </Container>
  );
}

export default App;
