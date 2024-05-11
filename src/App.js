import React, { useState } from 'react'
import './App.css';
import Result from './Result';
const RandomNum = Math.floor(Math.random()*100)+1;

function App() {
  const [term, Setterm] = useState("");
  function HandleChange(e) {
    Setterm(e.target.value);
    e.preventDefault();
  }
  return (
    <>
      <div className="container">
        <div className="head">
          <lable htmlFor="term">
            Guess the number between 1 to 100 🧠
          </lable>
        </div>
        <input
          id="term"
          type="text"
          name="term"
          onChange={HandleChange}
          autoComplete='off'
        />
        <Result RandomNum={RandomNum}  term={term} />
      </div>
      <br/>
      <p>Note : You have only 5 chance</p>
    </>


  );
}

export default App;
