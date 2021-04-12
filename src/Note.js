import React, {useState, useContext, memo } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Paper from '@material-ui/core/Paper'
import NoteEditForm from './NoteEditForm';
import { DispatchContext } from './contexts/NoteContext';
import { Dialog, DialogContent, DialogActions, Button, makeStyles, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    left: 'auto',
    top: 50
  }
});

function Note({ id, note, created_at }) {
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
          <IconButton size='small' color='primary' onClick={_=> toggleForm()}>
            <EditIcon />
          </IconButton>
          <IconButton size='small' color='secondary' onClick={_=> setOpen(true)}>
            <DeleteIcon />
          </IconButton>

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

export default memo(Note)