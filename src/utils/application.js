import { createContext } from "react";

const initialState = {
  todos: [],
};

const Application = createContext();

const apllicationReduce = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case "UPDATE":
        const updateTodos = state.todos.map(todo => {
            if(todo.id === action.payload.id) {
                return {
                    ...todo,
                    ...action.payload.update
                }
            }
            return todo;
        })
        return {
            ...state,
            todos: updateTodos
        };
    default:
        return state;
  }
};

export {initialState, apllicationReduce, Application};
