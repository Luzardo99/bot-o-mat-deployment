import React, { useState, useEffect } from "react";
import './App.css';
import Bot from './components/Bot';

function App() {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);


  const createBot = () => {
    //Prevention of bot not having name or type
    if (name === "" || type === "") {
      setError(true);
      return;
  }
      //Array of bots
      setList(list.concat( <Bot name={name} type={type} id={id} key={id}/>));

      setName("");
      setId(id+1);
    
  } 

  return (
    <div className="App">
      <div onChange={(e) => {setType(e.target.value); console.log(e.target.value);}}> 
        <select>
          <option>Unipedal</option>
          <option>Bipedal</option>
          <option>Quadrupedal</option>
          <option>Arachnid</option>
          <option>Radial</option>
          <option>Aeronautical</option>
        </select>
      </div>
      <div >
      <input className="inputName" value={name} placeholder="Enter Bot Name" onChange={ (e) => {setName(e.target.value)}} />
      <br></br>
      <button className="botButton" onClick={() => {createBot(); console.log(type + " " + name)}} >Create Bot</button>
      {error && <p color="red">*Please select type and name*</p>}

      <div className="makeBot">
          {list}
      </div>
      
      
      </div>
    </div>
  );
}

export default App;
