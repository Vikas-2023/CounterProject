import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15;
  let [counter,edit]= useState(0);

  function removeElement(){
    // counter=counter-1;
    if(counter>0){
      edit(counter-1);
    }
    
    // console.log(counter);
  }
  function addElement(){
    // counter=counter+1;
    // console.log(counter);
    if(counter<20){
      edit((counter)=>counter+1);
      // edit((counter)=>counter+1);
      // edit((counter)=>counter+1);
      // edit((counter)=>counter+1);
      
    }
   
    
  }

  function reset(){
    edit(counter=0)
  }

  return (
    <>
    <h1>Counter Application</h1>
    <h2>Count is : {counter}</h2>
    <button onClick={addElement}>Add Value </button>
    
    <br></br>
    <button onClick={removeElement}>Remove Value </button>
    <button onClick={reset}>Reset</button>
    
    </>
  )
}

export default App
