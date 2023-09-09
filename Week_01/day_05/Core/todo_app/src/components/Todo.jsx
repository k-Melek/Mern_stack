import React from 'react'

const Todo = ({todoList,deleteTodo,setTodoList}) => {
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