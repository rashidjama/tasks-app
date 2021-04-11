import React, { createContext, useEffect, useReducer } from 'react';
import NoteReducer from '../NoteReducer';

export const NoteContext = createContext();
export const DispatchContext = createContext();

export default function NoteProvider(props) {

  const initialNotes = JSON.parse(window.localStorage.getItem('notes') || '[]');
  
  const [notes, dispatch] = useReducer(NoteReducer, initialNotes)
 

  useEffect(_=> {
    window.localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <NoteContext.Provider value={notes}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </NoteContext.Provider>
  )
}
