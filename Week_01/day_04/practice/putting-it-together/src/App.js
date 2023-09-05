import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


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


function App() {
  return (
    <div className="App">
      {people.map((person, idx)=><PersonCard key={idx} person = {person}/>)}
    </div>
  );
}

export default App;
