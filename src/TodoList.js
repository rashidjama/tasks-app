import React, { useContext} from 'react'
import Todo from './Todo';
import { TodoContext } from './contexts/TodoContext'

export default function TodoList() {
  const  items  = useContext(TodoContext);

  const clearTasks = _=> {
    window.localStorage.removeItem('items');
    window.location.reload();
  }

  return (
    <>
    { items.length > 1 ?  <button type="button" className="btn btn-outline-danger btn-block btn-sm mt-4 mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete All Tasks</button>: ''}

     {/* Modal */}
     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-body d-flex justify-content-between align-items-center">
                  Do You Delete All Tasks?
                  <span>
                    <button onClick={clearTasks} type="button" className="btn btn-danger mr-2"  data-bs-dismiss="modal" >Yes</button>

                    <button type="button" className="btn btn-primary"   data-bs-dismiss="modal">No</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
      <ul className='list-group'>
        { items.map(item => (
          <Todo
            id={item.id}
            key={item.id}
            task={item.task}
            completed={item.completed}
          />
        ))}
      </ul>
    </>
  )
}
