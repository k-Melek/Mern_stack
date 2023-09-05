import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'
import Person from './components/Person'

function App() {
  const animals = ["🦓", "🦁", "🐱"]
  const [animalsState, setAnimals] = useState([...animals])
  const [people, setPeople] = useState([
                                        {name:"James", age:35, favColor:"Red"},
                                        {name:"Sarah", age:41, favColor:"coral"}])
  const addUser =(newUser) => {
    console.log("NEW USER FROM FORM.jsx TO APP.jsx", newUser);
    setPeople([...people,newUser])
  }
  return (
    <>
      <fieldset>
        <legend><h1>🏋️‍♀️ Lifting State 🏋️‍♀️</h1></legend>
        <Form animals ={animalsState} setAnimals = {setAnimals} addUser={addUser}/>
        <Display animals ={animalsState}/>
        <Person people = {people} />
      </fieldset>
    </>
  )
}

export default App
