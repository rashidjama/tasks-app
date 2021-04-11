import React, {useState, useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Paper from '@material-ui/core/Paper'
import NoteEditForm from './NoteEditForm';
import { DispatchContext } from './contexts/NoteContext';
import { Dialog, DialogContent, DialogActions, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    left: 'auto',
    top: 50
  }
});

export default function Note({ id, note, created_at }) {
  const [isPosting, setPost] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();

  const toggleForm = _ => setPost(!isPosting);

  if(isPosting) {
    return <NoteEditForm  id={id} note={note} toggleForm={toggleForm}/>
  } else {
    return (
      <Paper className='mb-2 p-2 pt-2 border-top'>
        <p className='lead'>{ReactHtmlParser(note)}</p>
        <span className='d-flex justify-content-between align-items-center'>
          <span className='text-muted'>Created On: {created_at}</span>
          <span>
          <button className='btn btn-sm btn-outline-primary mr-2' onClick={_=> toggleForm()}>Edit Note</button>
          <button className='btn btn-sm btn-outline-danger' onClick={_=> setOpen(true)}>Remove</button>

          </span>
        </span>
        <Dialog
           classes={{
            paper: classes.dialog
          }}
         open={open} onClose={_=> setOpen(false)}>
          <DialogContent>
            Delete This Note Permanently?
            <DialogActions>
          <Button variant="contained" onClick={_=> setOpen(false)} color="primary">
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
