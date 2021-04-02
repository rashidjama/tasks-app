import React, { useContext } from 'react';
import UseForm from './Hooks/UseForm';
import { DispatchContext } from './contexts/TodoContext'
import { ThemeContext } from './contexts/Theme'

export default function TodoForm() {
  const [value, handleChange, reset] = UseForm('');

  const dispatch = useContext(DispatchContext);
  const { darkMode } = useContext(ThemeContext)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD', newTask: value})
    reset();
  }

  return (
    <form onSubmit={handleSubmit} className='input-group mb-2'>
      <input
        type='text'
        name='task'
        value={value}
        onChange={handleChange}
        className='form-control'
      />
      <button className={darkMode ? 'btn btn-sm btn-outline-light ml-1' : 'btn btn-sm btn-outline-primary ml-1'}>Add Task</button>
    </form>
  )
}
