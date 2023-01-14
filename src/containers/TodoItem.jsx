import { Box, Button, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Application } from '../utils/application';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(Application);

  const handleRemove = () => {
    dispatch({
      type: 'REMOVE',
      payload: todo.id,
    });
  };

  const handleUpdate = update => {
    dispatch({
      type: 'UPDATE',
      payload: {
        id: todo.id,
        update,
      },
    });
  };

  return (
    <Box
      marginLeft="4"
      marginBottom="4"
      width="20%"
      background={'whiteAlpha.100'}
      borderRadius="6px"
      display="flex"
      flexDirection="column"
    >
      <Box background="blue.800">
        <Text
          textTransform="uppercase"
          fontFamily="Arial"
          textAlign="center"
          fontSize="2xl"
        >
          {todo.text}
        </Text>
      </Box>
      <Box p={8} display="flex" textAlign="center" justifyContent="center" gap="4">
        <Button background="teal.400" onClick={handleRemove}>
          REMOVE
        </Button>
        <Button background="teal.400" onClick={handleUpdate}>
          UPDATE
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
