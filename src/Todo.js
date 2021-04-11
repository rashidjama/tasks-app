import React, {useState, useContext, memo } from 'react'
import EditTodo from './EditTodo';
import { DispatchContext } from './contexts/TodoContext'
import Checkbox from '@material-ui/core/Checkbox';
import './Todo.css';
import { ThemeContext } from './contexts/Theme';
import { Dialog, DialogContent, DialogActions, Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    left: 'auto',
    top: 50
  }
});
function Todo({ id, task, completed }) {
  const classes = useStyles(); 

  const [isEditing, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useContext(DispatchContext);
  const { darkMode } = useContext(ThemeContext);

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
      <button className='btn btn-sm btn-outline-danger' onClick={_=> setOpen(true)}>&#10005;</button>
      </span>
      <Dialog
        classes={{
          paper: classes.dialog
        }}
         open={open} onClose={_=> setOpen(false)}>
          <DialogContent>
            Delete This Task Permanently?
            <DialogActions>
          <Button variant="contained" autoFocus onClick={_=> setOpen(false)} color="primary">
            No
          </Button>
          <Button variant="contained" onClick={_=> dispatch({type: 'REMOVE', id:id})} color="secondary">
            Yes
          </Button>
        </DialogActions>
          </DialogContent>
        </Dialog>
    </li>
  )
  }
}

export default memo(Todo)