import React, {UseContext} from "react";
import {TodosContext} from "./Context/store";



export default ({note}) => {
    const { completed, removeTodos} = useContext(TodosContext);

    const done = () => {
        completed(note.id);
    };

    const remove = () => {
        removeTodos(note.id);
    };

    return(
        <div> 
            {note.text} 
            <button onClick={remove}> REMOVE</button>
            <button onClick={done}> DONE</button>
        </div>
    );
};