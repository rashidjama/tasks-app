import React, { useContext} from 'react'
import Todo from './Todo';
import { TodoContext } from './contexts/TodoContext'

export default function TodoList() {
  const { items } = useContext(TodoContext)
  return (
    <ul>
      { items.map(item => (
        <Todo
          id={item.id}
          key={item.id}
          task={item.task}
        />
      ))}
    </ul>
  )
}
