import React,{useState,useEffect} from 'react'

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

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
      }, [todoList]);
    

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