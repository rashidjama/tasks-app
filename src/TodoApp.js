import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoProvider from './contexts/TodoContext'
import PageConent from './PageContent';
import Paper from '@material-ui/core/Paper'


export default function TodoApp() {

  return (
    <PageConent>
      <div className='container pt-2'>
        <TodoProvider>
        <TodoForm />
          <Paper>
            <TodoList />
          </Paper>
        </TodoProvider>
    </div>
    </PageConent>
  )
}
