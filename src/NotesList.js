import React, { useState, useContext } from 'react'
import { NoteContext } from './contexts/NoteContext';
import Note from './Note';
import NoteForm from './NoteForm';
import Button from '@material-ui/core/Button';

export default function NotesList() {
  const [isPosting, setPost] = useState(false);
  const notes = useContext(NoteContext)

  const toggleForm = _ => setPost(!isPosting);

  const clearNotes = _=> {
    window.localStorage.removeItem('notes');
    window.location.reload();
  }

  if(isPosting) {
    return <NoteForm  toggleForm={toggleForm}/>
  } else {
    return (
      <div>
        { notes.length < 2 ?  <Button variant='contained' color='primary' className='btn btn-block  mb-3' onClick={_=> toggleForm()}>Create New Note</Button> :
        <span className='d-flex justify-content-between align-items-center mb-3'>
          <Button size='small' variant='contained' color='primary' onClick={_=> toggleForm()} >Create New Note</Button>
          <Button size='small' variant='contained' color='secondary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete All Notes</Button>
        </span>
        }

             {/* Modal */}
             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-body d-flex justify-content-between align-items-center">
                  Do You Delete All Notes?
                  <span>
                    <button onClick={clearNotes} type="button" className="btn btn-danger mr-2"  data-bs-dismiss="modal" >Yes</button>

                    <button type="button" className="btn btn-primary"   data-bs-dismiss="modal">No</button>
                  </span>
                </div>
              </div>
            </div>
          </div>

        {notes.map(note => 
         <Note
          id={note.id}
          key={note.id}
          note={note.note}
          created_at={note.created_at}
        />
        )}
      </div>
  )
  }
}
