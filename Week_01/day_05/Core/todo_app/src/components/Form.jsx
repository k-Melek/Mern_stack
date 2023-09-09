import React,{useState} from 'react'

const Form = ({todoList, setTodoList}) => {

    const [oneTodo, setOneTodo] = useState(
        {
            isCompleted:false
        }
    );

    const createTodo = (e) => {
        e.preventDefault()
        setTodoList([...todoList, oneTodo])
        setOneTodo({
            content:"",
            isCompleted:false
        })

    }

  return (
    <>
        <form onSubmit={createTodo}>
            <input type="text" 
            onChange={(e) => setOneTodo({...oneTodo, content:e.target.value}) }
            value={oneTodo.content}/>
            <br />
            <button>Add Todo</button>
        </form>
    </>
  )
}

export default Form