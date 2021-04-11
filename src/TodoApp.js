import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoProvider from './contexts/TodoContext'
import PageConent from './PageContent'


export default function TodoApp() {

  return (
    <PageConent>
      <div className='container pt-2'>
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
    </div>
    </PageConent>
  )
}
