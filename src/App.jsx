import { useState } from 'react'
import './Style.css'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

function App() {
  
  const [todos, setTodos] = useState([])

function addTodo(title){
  setTodos(currentTodos =>{
          return[
            ...currentTodos, {id: crypto.randomUUID(), title, completed: false},]
        })
}

function toggleTodo(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo =>{
      if(todo.id == id){
        return {...todo, completed}
      }
      return todo
    })
  })
}

function todoDelete(id){
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}
  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className='headers'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} todoDelete={todoDelete}/>
    </>
  )
}

export default App
