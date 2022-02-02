
import React, {createContext, useReducer} from "react";


const initialState = {
    todos: [
        {
            text: " Questo è il testo del todo ",
            id: 1,
        },
    ],

    addTodos:() => {},
    complete:() => {},
    removeTodos: () => {},
};

export const TodosContext = createContext(initialState);

const todosReducer = (state, action) => {
    switch(action.type) {
        case "add": 
            return {
                todos: [...state.todos, action.payload],
        };

        case "done":
            const newTodoState = [...state.todos];
            const indexTodo = newTodoState.findIndex((note) => note.id === action.payload);
            newTodoState[indexTodo] = {...newTodoState[indexTodo].done};
            return {
                todods: newTodoState,
        };

        case "remove":
            return {
                todos: state.todos.filter((note) => note.id !== action.payload),
            };


        default: 
        return state;

    }
   
};

export default ({children}) => {
    const [state, dispatch] = useReducer(todosReducer, initialState);

    const addTodos = (note) => 
        dispatch({
            type: "add",
            payload: note,
        });

    const completed = (id) => 
        dispatch({
            type: "done",
            payload: id,
        });

    const removeTodos = (id) =>
        dispatch({
            type: " remove",
            payload: id,
        });

    return(
        <TodosContext.Provider value ={{state, addTodos, complete, removeTodos}}>
            {children}
        </TodosContext.Provider>
    );
};

