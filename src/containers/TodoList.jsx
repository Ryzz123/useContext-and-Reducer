import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Application } from "../utils/application";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const {state} = useContext(Application)

  return (
    <Box>
        {state?.todos?.map(todo => (
            <TodoItem key={todo.id} todo={todo}/>
        ))}
    </Box>
  )
};

export default TodoList;
