import React, { useState, useContext } from 'react';
import UseForm from './Hooks/UseForm';
import { DispatchContext } from './contexts/TodoContext'
import { ThemeContext } from './contexts/Theme';
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar';

export default function TodoForm() {
  const [value, handleChange, reset] = UseForm('');
  const [notify, setNotify] = useState(false);

  const dispatch = useContext(DispatchContext);
  const { darkMode } = useContext(ThemeContext);

  const handleSubmit = e => {
    e.preventDefault();
    if(value.length > 30) {
      setNotify(true);
    } else {
      dispatch({type: 'ADD', newTask: value})
      reset();
    }
  }
 
  return (
    <>
    { notify ? <Snackbar open={notify} autoHideDuration={4000}  anchorOrigin={{ vertical: 'top', horizontal:'center' }}onClose={_=> setNotify(false)}>
        <Alert onClose={_=> setNotify(false)} severity="warning">
          Input must be less than 30 characters.
        </Alert>
      </Snackbar> : ''}
    <form onSubmit={handleSubmit} className='input-group my-2'>
      <input
        type='text'
        name='task'
        value={value}
        onChange={handleChange}
        className='form-control'
        required
        placeholder='Please write your task here...'
      />
      <button className={darkMode ? 'btn btn-sm btn-light ml-1' : 'btn btn-sm btn-outline-primary ml-1'}>Add Task</button>
    </form>
    </>
  )
}
