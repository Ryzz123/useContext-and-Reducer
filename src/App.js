import React, { useReducer } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { initialState, apllicationReduce, Application } from './utils/application';
import TodoForm from './containers/TodoForm';
import TodoList from './containers/TodoList';

function App() {
  const [state, dispatch] = useReducer(apllicationReduce, initialState);

  return (
    <ChakraProvider theme={theme}>
      <Application.Provider value={{state, dispatch}}>
        <TodoForm />
        <TodoList />
      </Application.Provider>
    </ChakraProvider>
  );
}

export default App;
