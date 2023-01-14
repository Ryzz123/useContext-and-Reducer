import { Box, Button, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { Application } from '../utils/application';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState();

  // gunakan context nilai dispatch
  const { dispatch } = useContext(Application);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      payload: {
        id: Date.now(),
        text: newTodo,
      },
    });
    setNewTodo("");
  };

  return (
    <Box w="30%" margin="2rem auto">
      <form onSubmit={handleSubmit}>
        <Box display="flex" gap="2" flexDirection="row">
          <Input
            placeholder="Masukan kata"
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
          <Button bg="teal.400" type="submit">
            SUBMIT
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TodoForm;
