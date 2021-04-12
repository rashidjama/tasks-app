import React, {useState, useContext, memo } from 'react'
import EditTodo from './EditTodo';
import { DispatchContext } from './contexts/TodoContext'
import Checkbox from '@material-ui/core/Checkbox';
import './Todo.css';
// import { ThemeContext } from './contexts/Theme';
import { Dialog, DialogContent, DialogActions, Button, makeStyles, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'

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
  // const { darkMode } = useContext(ThemeContext);

  const toggleEdit = _ => {
    setEdit(!isEditing)
  }
  
  if(isEditing) {
    return <EditTodo id={id} task={task} toggleEdit={toggleEdit}/>
  } else {
    return (
    <div className=' d-flex justify-content-between align-items-center'>
     <div className='d-flex align-items-center'>
     <Checkbox onClick={_=> dispatch({type: 'TOGGLE', id:id, completed: completed})} checked={completed} />
      <span className={completed ? 'Completed' : ''}>{task}
      </span>
     </div>
      <span>
      <IconButton size='small' color='primary' onClick={toggleEdit}>
        <EditIcon />
      </IconButton>
      <IconButton size='small' color='secondary' onClick={_=> setOpen(true)}>
        <DeleteIcon />
      </IconButton>
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
    </div>
  )
  }
}

export default memo(Todo)