import React from "react";
import { ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  completed: {
    textDecoration: "line-through"
  }
}));

export default function TodoItem({ id, task, isComplete, toggleTodo }) {
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
