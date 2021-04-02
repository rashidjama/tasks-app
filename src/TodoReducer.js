import uuid from 'uuid'
export default function TodoReducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [...state, {task: action.newTask, id: uuid(), completed: false}];
    case 'EDIT':
      return state.map(item => item.id === action.id ? {...item, task: action.updatedItem} : item);
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
    case 'TOGGLE':
      return state.map(item => item.id === action.id ? {...item, completed: !action.completed} : item);
    default:
      return state;
  }
}
