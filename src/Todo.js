import React, {useState, useContext, memo } from 'react'
import EditTodo from './EditTodo';
import { DispatchContext } from './contexts/TodoContext'
import Checkbox from '@material-ui/core/Checkbox';
import './Todo.css';
import { ThemeContext } from './contexts/Theme';
import { Dialog, DialogContent, DialogActions, Button, makeStyles, Paper} from '@material-ui/core';

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
    <Paper className=' d-flex justify-content-between mb-2 bg-light align-items-center'>
     <div className='d-flex align-items-center'>
     <Checkbox onClick={_=> dispatch({type: 'TOGGLE', id:id, completed: completed})} checked={completed} />
      <span className={completed ? 'Completed' : ''}>{task}
      </span>
     </div>
      <span>
      <button className={darkMode ? 'btn btn-sm btn-outline-dark mr-1' : 'btn btn-sm btn-outline-primary mr-1'} onClick={toggleEdit}>Edit</button>
      <button className='btn btn-sm btn-outline-danger mr-2' onClick={_=> setOpen(true)}>&#10005;</button>
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
    </Paper>
  )
  }
}

export default memo(Todo)