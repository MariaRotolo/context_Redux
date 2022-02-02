
import React, { useContext } from 'react';
import { TodosContext } from './Context/store';
import { v4 as uuidv4 } from 'uuid';

import Note from './Note';

export default () => {
  const {
    state: { todos },
    addTodos,
  } = useContext(TodosContext);

  const onType = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      addTodos({
        text: e.target.value,
        id: uuidv4(),
        done: false,
      });
      e.target.value = '';
    }
  };
  return (
    <div>
      
        <div>
            <h3>Done</h3>
                {todos
                .filter(todo => todo.done === true).map((item) => (
                <Note key={item.id} note={item} />
                ))}

        </div>
      
        <div> 
            <h3>Undone</h3>
                {todos
                .filter(todo => todo.done === false)
                .map((item) => (
                <Note key={item.id} note={item} />
                ))}
        </div>
      

      <input onKeyDown={onType}>
        Inserisci il todo
        
      </input>
    </div>
  );
};