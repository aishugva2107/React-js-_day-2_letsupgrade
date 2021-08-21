import './App.css';
import Header from './Header';
import {useState} from 'react';


// State 

function App() {

  let [name,setName]=useState("saurabh");

  function changeName(){
    setName("Thor");
    console.log(name);
  }


 return (
    <div className="App">

      <h1>{name}</h1>    

      <button onClick={changeName} >Click</button>

    </div>
  );
}

export default App;
