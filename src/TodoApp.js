import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoProvider from './contexts/TodoContext'

export default function TodoApp() {

  return (
    <TodoProvider>
      <h1>Todo List App</h1>
      <TodoList />
      <TodoForm />
    </TodoProvider>
  )
}
