import React, {useState, useContext } from 'react'
import UseForm from './Hooks/UseForm';
import { DispatchContext } from './contexts/TodoContext';
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar';


export default function EditTodo({id, task, editTask, toggleEdit }) {
  const [notify, setNotify] = useState(false);
  const [value, handleChange, reset] = UseForm(task);
  const dispatch = useContext(DispatchContext);
  
  const handleSubmit = e => {
    e.preventDefault();
    if(value.length > 30) {
      setNotify(true)
    } else {
      dispatch({type: 'EDIT', id:id, updatedItem: value})
      reset();
      toggleEdit();
    }
  }

  return (
    <>
    { notify ? <Snackbar open={notify} autoHideDuration={4000}  anchorOrigin={{ vertical: 'top', horizontal:'center' }}onClose={_=> setNotify(false)}>
        <Alert onClose={_=> setNotify(false)} severity="warning">
          Input must be less than 30 characters.
        </Alert>
      </Snackbar> : ''}
    <form onSubmit={handleSubmit} className='input-group my-1'>
      <input
        type='text'
        name='value'
        value={value}
        onChange={handleChange}
        className='form-control'
        autoFocus
        required
      />
      <button  className='btn btn-sm btn-primary mx-1'>Update</button>
      <button className='btn btn-sm btn-danger' type='button' onClick={_=> toggleEdit()}>Cancel</button>
    </form>
    </>
  )
}
