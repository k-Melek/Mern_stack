import React,{useState} from 'react'
import Display from './Display'

const Form = (props) => {
    const [username, setUsername] =  useState("")
    const [age, setAge] =  useState(18)
    const [favFood, setFavFood] =  useState("")

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Hello from FORM");
        console.log(event);
    }

  return (
    <fieldset>
        <legend>🎈🎈🎈 Form 🎈🎈🎈</legend>
        <hr />
        <h4>
        Username From State :{JSON.stringify(username)} <br />
        Username From State :{JSON.stringify(age)}<br />
        Username From State :{JSON.stringify(favFood)}<br />
        </h4>
        <hr />
        <form onSubmit={formHandler}>
            <p>Username : <input type="text"
            onChange={eventItSelf => setUsername(eventItSelf.target.value)}
            value={username} // Value must be added
            /></p>
            <p>Age : <input type="number"
            onChange={eventItSelf => setAge(eventItSelf.target.value)} 
            value={age}  // Value must be added
            /></p>
            <p>FavFood : <input type="text" 
            onChange={eventItSelf => setFavFood(eventItSelf.target.value)}
            value={favFood} // Value must be added
            /></p>
            <br />
            <button>Submit</button>
        </form>
        <Display username={username} age = {age} favFood = {favFood} />
    </fieldset>
  )
}

export default Form