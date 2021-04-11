import React, { useState, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alert from '@material-ui/lab/Alert';
import { DispatchContext } from './contexts/NoteContext';


export default function NoteForm({ toggleForm }) {
  const [value, setVal ] = useState('');
  const [inputLength, toggleLength] = useState(false);

  const dispatch = useContext(DispatchContext);


  const handleSubmit = e => {
    e.preventDefault();
    if(value.length < 1) {
      toggleLength(true)
    } else {
      dispatch({type: 'ADD', newNote: value})
      toggleForm();
      toggleLength(false);
    }
    setVal('');
  }
  
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  }

  return (
    <div>
    { inputLength ? <Alert severity='warning' onClose={() => toggleLength(false)} className='my-2'>Please fill out this field, Thanks</Alert> : ''}
    <CKEditor 
      editor={ ClassicEditor}
      onChange= {handleChange}
      data={value}
    />
    <span className='d-flex justify-content-between align-items-center'>
    <button className='btn btn-primary mt-2' onClick={ handleSubmit }>Save Note</button>
    <button className='btn btn-danger mt-2' onClick={ toggleForm }>Cancel Post</button>
    </span>
  </div>
  )
}
