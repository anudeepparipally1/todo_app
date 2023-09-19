import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
    <div className='container mb-4 mt-4'>
        <h3 className='my-3 mb-4' > ToDos List</h3>
        {   props.todos.length===0?"No Todos to display":
            props.todos.map((todo)=>{
                return (
                  <>
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr />
                  </>
                )
            })
        }
    </div>
  )
}

export default Todos
