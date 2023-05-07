import { useState } from 'react';
import Task from './components/Task';
import './index.css';
import milk from "./icons/milk.svg";

function App() {

  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState("");

  function userEntered(e){
    setUserInput(e.target.value);
  }

  function addNote(){
    setNotes([...notes, userInput]);
    setUserInput("");
  }

  return (
    <div className="App">

      <div className="input">
        <img src={milk} alt="" />
        <input type="text" placeholder='enter new note' value = {userInput} onChange={userEntered}/>
      </div>
      
      <div className="circle" onClick={addNote}>
          <h1>+</h1>
        </div>

      <div className="container">
        <Task />

        {
          notes.map((note) => {
            return <Task key ={note} noteName = {note}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
