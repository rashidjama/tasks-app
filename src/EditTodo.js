import React from 'react'
import UseForm from './Hooks/UseForm'

export default function EditTodo({id, task, editTask, toggleEdit }) {
  const [value, handleChange, reset] = UseForm(task);

  const handleSubmit = e => {
    e.preventDefault();
    editTask(id, value)
    reset();
    toggleEdit();
  }
  console.log('EDIT FORM IS HERE')
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='value'
        value={value}
        onChange={handleChange}
      />
      <button>Update</button>
      <button type='button' onClick={_=> toggleEdit()}>Cancel</button>
    </form>
  )
}
