import React,{useState} from 'react'
import Display from './Display'

const newUser = {username :"", age:18, favFood:""}
const users = []

const Form = (props) => {
    const [userName, setUserName] =useState("")
    const [userNameError, setUserNameError] = useState("")
    const [age, setAge] =useState("18")
    const [ageError, setAgeError] =useState("18")
    const [favFood, setFavFood] =useState("")
    
    const userNameHandler = (e) =>{
        setUserName(e.target.value)
        if(e.target.value.length < 4){
            setUserNameError("Username too short")
        }
        else{
            setUserNameError("")
        }
    }
    const AgeHandler = (e) => {
        setAge(parseInt(e.target.value));
        if (e.target.value === "") {
            // setAge(0)
            setAgeError("Age is required");
        } else if (isNaN(e.target.value) || e.target.value < 0) {
            setAgeError("Age must be a positive number");
        } else if (e.target.value > 100) {
            setAgeError("Age can't be higher than 100");
        } else {
            setAgeError("");
        }
    };
    const formHandler = (e) => {
        e.preventDefault()
        // console.log(`
        // username : ${userName} \n 
        // Age : ${age} \n
        // Favorite food : ${favFood}
        // `
        // );
        // e.target.reset()
        console.log("Welcome", newUser);
        newUser.username = userName
        newUser.age = age
        newUser.favFood = favFood
        const oneUser = {userName,age,favFood}
        users.push(oneUser)
        setUserName("")
        setAge(18)
        setFavFood("")
    }
  return (
    <fieldset>
        <legend>
            <h2>🎈 MORE FORMS 🎈</h2>
        </legend>
        <p style={{color:"red"}}>{userNameError}</p>
        <p style={{color:"red"}}>{ageError}</p>
        <h4>
            Username : {userName} <br />
            Age : {age} <br />
            Favorite Food : {favFood} <br />
        </h4>
        <form onSubmit={formHandler}>
            <p>Username : <input type="text"
            onChange={(e) => userNameHandler(e)}
            value={userName}/></p>
            <p>Age : <input type="number" 
            onChange={(e) => AgeHandler(e)} 
            value={age}/></p>
            <p>Favorite Food : <input type="text" 
            onChange={(e) => setFavFood(e.target.value)}
            value={favFood}/></p>
            <button>Create User</button>
            <Display user={newUser} users ={users} />
        </form>
    </fieldset>
  )
}

export default Form