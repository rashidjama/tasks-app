import React, {useState, useContext } from 'react'
import EditTodo from './EditTodo';
import { TodoContext } from './contexts/TodoContext'

export default function Todo({ id, task }) {
  const [isEditing, setEdit] = useState(false);

  const {removeTask, editTask } = useContext(TodoContext)

  const toggleEdit = _ => {
    setEdit(!isEditing)
  }

  if(isEditing) {
    return <EditTodo id={id} task={task} editTask={editTask} toggleEdit={toggleEdit}/>
  } else {
    return (
    <li>
      {task} 
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={_=> removeTask(id)}>Delete</button>
    </li>
  )
  }
}
