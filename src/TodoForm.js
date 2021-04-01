import React, { useContext } from 'react';
import UseForm from './Hooks/UseForm';
import { TodoContext } from './contexts/TodoContext'

export default function TodoForm() {
  const [value, handleChange, reset] = UseForm('');

  const { addTask } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault();
    addTask(value)
    reset();
  }
  console.log('FORM RENDERED')
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='task'
        value={value}
        onChange={handleChange}
      />
      <button>Add Task</button>
    </form>
  )
}
