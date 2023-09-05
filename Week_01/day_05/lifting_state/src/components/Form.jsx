import React,{useState} from 'react'

const Form = (props) => {
    // console.log("Props:" , props);
    const [user, setUser] = useState({name:"", age:0, favColor:""})
    const createUser = (e) => {
        e.preventDefault()
        // console.log(user);
        props.addUser(user)
        setUser({name:"", age:0, favColor:""})
    }
  return (
    <fieldset>
        <legend>Form</legend>
        <button onClick={() => props.setAnimals([...props.animals, "🦝"])}>Add raccoon 🦝</button>
        <hr />
        <h4>
            User From STATE : {JSON.stringify(user)}
        </h4>
        <hr />
        <form onSubmit={createUser}>
            <p>
                Name : <input type="text" 
                onChange={(e)=> setUser({...user,name:e.target.value})}
                value={user.name}/><br />
                Age : <input type="number" 
                onChange={(e)=> setUser({...user,age:e.target.value})}
                value={user.age}/><br />
                Favorite Color : <input type="text" 
                onChange={(e)=> setUser({...user,favColor:e.target.value})}
                value={user.favColor}/><br />
                <button>Submit</button><br />
            </p>
        </form>
    </fieldset>
  )
}

export default Form