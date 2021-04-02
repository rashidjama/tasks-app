import React, {useState, useContext, memo } from 'react'
import EditTodo from './EditTodo';
import { DispatchContext } from './contexts/TodoContext'
import Checkbox from '@material-ui/core/Checkbox';
import './Todo.css';
import { ThemeContext } from './contexts/Theme';

function Todo({ id, task, completed }) {
  const [isEditing, setEdit] = useState(false);

  const dispatch = useContext(DispatchContext);
  const { darkMode } = useContext(ThemeContext)

  const toggleEdit = _ => {
    setEdit(!isEditing)
  }


  if(isEditing) {
    return <EditTodo id={id} task={task} toggleEdit={toggleEdit}/>
  } else {
    return (
    <li className='list-group-item d-flex justify-content-between mb-1 bg-light align-items-center'>
     <span>
     <Checkbox onClick={_=> dispatch({type: 'TOGGLE', id:id, completed: completed})} checked={completed} />
      <span className={completed ? 'Completed' : ''}>
        {task}
      </span>
     </span>
      <span>
      <button className={darkMode ? 'btn btn-sm btn-outline-dark mr-1' : 'btn btn-sm btn-outline-primary mr-1'} onClick={toggleEdit}>Edit</button>
      <button className='btn btn-sm btn-outline-danger' onClick={_=> dispatch({type: 'REMOVE', id: id})}>&#10005;</button>
      </span>
    </li>
  )
  }
}

export default memo(Todo)