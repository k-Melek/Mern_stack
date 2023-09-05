import logo from './logo.svg';
import './App.css';



const todos = [
    'Learn React',
    'Climb mount Everest',
    'Run a marathon',
    'Feed the dog'
]



function App() {
  return (
    <fieldset className="App">
      <legend>***Test***</legend>
      <h1>Hello Dojo!</h1>
      <h3>Things to do</h3>
      <ul>
        { todos.map((todo, idx) => <li key={idx}> {todo} </li>)}
      </ul>
    </fieldset>
  );
}

export default App;
