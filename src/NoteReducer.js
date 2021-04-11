
import uuid from 'uuid'
//Created at date
let today = new Date();
let month = today.getMonth() + 1;
if(month < 10) month = '0' + month;

let day = today.getDate();
if(day < 10) day = '0' + day;
let date = `${month}/${day}/${today.getFullYear()}`;

export default function NoteReducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [{note: action.newNote, id: uuid(), created_at: date},...state]
    case 'EDIT':
      return state.map(note => note.id === action.id ? {...note, note: action.updatedNote} : note)
    case 'REMOVE':
      return state.filter(note => note.id !== action.id);
    default:
      return state
  }
}


