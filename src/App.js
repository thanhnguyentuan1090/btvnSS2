import React from 'react'
import './App.css';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

export default function App() {
  const state = [
    {
      value: 'what to do'
    },
    {
      value: 'what is this'
    }

  ];
  return (
    <div>
    <div className='app'>
      <div className='app-header'>
        <h1>Todo List</h1>
        <TodoHead />
        <TodoList todo={state} />
        {/* <NewFeed /> */}
      </div>
    </div>
    </div>

   
  )
}
