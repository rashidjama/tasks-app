import React, { useContext, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alert from '@material-ui/lab/Alert';
import { DispatchContext } from './contexts/NoteContext';

export default function NoteEditForm({id, editNote, note, toggleForm}) {
  const [value, setVal ] = useState(note);
  const [inputLength, toggleLength] = useState(false);

  const dispatch = useContext(DispatchContext);


  const handleSubmit = e => {
    e.preventDefault();
    if(value.length < 1) {
      toggleLength(true)
    } else {
      dispatch({type: 'EDIT', id:id, updatedNote: value})
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
    <div className='bg-primary p-1 mb-2'>
    { inputLength ? <Alert severity='warning' onClose={() => toggleLength(false)} className='my-2'>Please fill out this field, Thanks</Alert> : ''}
    <CKEditor 
      editor={ ClassicEditor}
      onChange= {handleChange}
      data={value}
    />
    <span className='d-flex justify-content-between align-items-center pt-1'>
    <button className='btn btn-sm btn-light' onClick={ handleSubmit }>Save Note</button>
    <button className='btn btn-sm btn-danger' onClick={ toggleForm }>Cancel Edit</button>
    </span>
  </div>
  )
}
