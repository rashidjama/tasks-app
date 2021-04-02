import React, { useContext } from 'react'
import UseForm from './Hooks/UseForm';
import { DispatchContext } from './contexts/TodoContext'

export default function EditTodo({id, task, editTask, toggleEdit }) {
  const [value, handleChange, reset] = UseForm(task);
  const dispatch = useContext(DispatchContext)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'EDIT', id:id, updatedItem: value})
    reset();
    toggleEdit();
  }

  return (
    <form onSubmit={handleSubmit} className='input-group mb-1'>
      <input
        type='text'
        name='value'
        value={value}
        onChange={handleChange}
        className='form-control'
        autoFocus
      />
      <button  className='btn btn-sm btn-primary mx-1'>Update</button>
      <button className='btn btn-sm btn-danger' type='button' onClick={_=> toggleEdit()}>Cancel</button>
    </form>
  )
}
