import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const people = [
    {
      firstname: 'John',
      lastname: 'Doe',
      age: 30,
      hairColor: 'Brown'
    },
    {
      firstname: 'Jane',
      lastname: 'Smith',
      age: 25,
      hairColor: 'Blonde'
    },
    {
      firstname: 'Michael',
      lastname: 'Johnson',
      age: 40,
      hairColor: 'Black'
    },
    {
      firstname: 'Emily',
      lastname: 'Williams',
      age: 28,
      hairColor: 'Red'
    }
  ];

  return (
    <>
      {people.map((person, idx)=><PersonCard key={idx} person = {person}/>)}
    </>
  )
}

export default App
