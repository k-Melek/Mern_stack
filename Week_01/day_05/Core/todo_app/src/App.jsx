import { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'

function App() {

  const [todoList, setTodoList] = useState(
    [
      {content:"test 1", isCompleted:true},
      {content:"test 12", isCompleted:false},
      {content:"test 1123", isCompleted:true}
  ])

  const deleteTodo = (id) => {
      const filtredTodos = todoList.filter((todo, idx) => idx != id)
      setTodoList(filtredTodos)
  }





  return (
    <>
      <h1>Plan ur day</h1>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Todo  todoList={todoList} deleteTodo={deleteTodo} setTodoList={setTodoList} />
    </>
  )
}

export default App
