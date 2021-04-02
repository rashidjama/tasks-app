import React, { createContext, useEffect, useReducer} from 'react';
import todoReducer from '../TodoReducer'
export const TodoContext = createContext();
export const DispatchContext = createContext();

export default function TodoProvider(props) {
    //Retrieve data from local storage
    const initialData = JSON.parse(window.localStorage.getItem('items') || '[]');

    const [items, dispatch] = useReducer(todoReducer, initialData)
  

  //save tasks to local storage
  useEffect(_=> {
    window.localStorage.setItem('items', JSON.stringify(items))
  }, [items])
 

  return (
    <TodoContext.Provider value={items}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  )
}
