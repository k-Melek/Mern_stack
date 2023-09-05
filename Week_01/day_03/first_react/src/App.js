import logo from './logo.svg';
import './App.css';
import FirstClassComponent from './components/FirstClassComponent';
import SomeClassComponent from './components/SomeClassComponent';

function App() {
  console.log("Hello from App.js 🎈🎈🎈");
  const msg = "The first variable from App.js"
  let number = 23
  const animals =["leopard", "giraffe", "zebra", "elephant", "lion"]
  const user = {
    userName:"John",
    age:41,
    favFood:"🍖",
    hobbies:{
      name:"football",
      icon:"⚽"
    }
  }
  return (
    <fieldset>
      <legend>APP.js ****</legend>
    <div className="App">
      <h1>Hello From App.js 🎈🎈🎈🎈🎈</h1>
      <h2>
        What we are going to do today?
      </h2>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>
    </div>
    {/* <div>
      <h5>Message :{msg} </h5>
      <h5>Number : {number} </h5>
      <h4>{animals} </h4>
      <ul>
        {animals.map((animal, index) => <li key={index}> {index} --- {animal} </li> )}
      </ul>
      <h1>{JSON.stringify(user)} </h1>
      <h1>User Name: {user.userName} </h1>
      <h1>User Age: {user.age} </h1>
      <h1>User Favorite Food: {user.favFood} </h1>
    </div> */}
    <div>
      <FirstClassComponent number={number} john={user}/>
      <hr />
      <SomeClassComponent animals={animals}/>
    </div>
    </fieldset>
  );
  
}

export default App;
