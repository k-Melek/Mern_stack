import React,{useEffect} from 'react'

const Todo = ({todoList,deleteTodo,setTodoList}) => {


    useEffect(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('todos')) || [];
        setTodoList(storedTodoList);
      }, []);


  return (
    <div>
        {todoList.map((todo,idx) => 
        <h4 key={idx}>
            <label htmlFor={idx} 
            style={{textDecoration:todo.isCompleted?"line-through":"none"}} 
            >{todo.content}</label>
            <input type="checkbox" id={idx}
            checked ={todo.isCompleted}
            onChange={(e) => {
                const updatedList = [...todoList]
                updatedList[idx].isCompleted = !(updatedList[idx].isCompleted)
                setTodoList(updatedList)
            }
            }
            />
            <button
            onClick={() => deleteTodo(idx)}
            >Delete</button>
        </h4>
        )}
    </div>
  )
}

export default Todo