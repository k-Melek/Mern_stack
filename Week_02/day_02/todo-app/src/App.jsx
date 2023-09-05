import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'


function App() {
  const [todoList, setTodoList] = useState([
    {content:"get the python belt", isCompleted:true},
    {content:"go to mars", isCompleted:false},
    {content:"get Married", isCompleted:false}
  ])

  const deleteTodo = (id) =>{
    console.log("Deleted Todo",todoList[id]);
    const filteredTodoList = todoList.filter((todo,idx) => idx != id)
    setTodoList(filteredTodoList)
    console.log("New TodoList",filteredTodoList);
  }
  
  return (
    <>
      <fieldset>
        <legend><h1>ToDo app</h1></legend>
        <Form todoList={todoList} setTodoList={setTodoList} />
        <Todo todoList={todoList} deleteTodo={deleteTodo} setTodoList = {setTodoList} />
      </fieldset>
    </>
  )
}

export default App
