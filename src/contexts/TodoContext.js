import React, {useState, createContext, useEffect} from 'react';
import uuid from 'uuid';

export const TodoContext = createContext();

export default function TodoProvider(props) {
    //Retrieve data from local storage
    const initialData = JSON.parse(window.localStorage.getItem('items') || '[]')
    const [items, setItems] = useState(initialData);
  

  //save tasks to local storage
  useEffect(_=> {
    window.localStorage.setItem('items', JSON.stringify(items))
  }, [items])
 

   //add new task to task list
   const addTask = newTask => {
    setItems([...items, {task: newTask, id: uuid(), completed: false}])
  }
  //remove a task
  const removeTask = id => {
    const updatedTasks = items.filter(item => item.id !== id);
    setItems(updatedTasks)
  }
  //Edit task
  const editTask = (id, updatedItem) => {
    const updatedTasks = items.map(item => 
      item.id === id ? {...item, task: updatedItem } : item
      )
    setItems(updatedTasks)
  }
  return (
    <TodoContext.Provider value={{items, addTask, removeTask, editTask}}>
      {props.children}
    </TodoContext.Provider>
  )
}
