

import React, { Component } from 'react';
import TodosProvider from './Context/store';
import Notes from './Notes';
import './App.css';

function App() {
  return (
    <TodosProvider>
      <Notes />
    </TodosProvider>
  );
}


export default App;
