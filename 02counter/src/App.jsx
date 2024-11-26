import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {
    if(counter >= 20){
      alert("Counter value can't be greater than 20")
      return
    }
    counter = counter + 1

    setCounter(counter)
    console.log("counter", counter)
  }

  const removeValue = () => {
    if(counter <= 0){
      alert("Counter value can't be less than 0")
      return
    }
    counter = counter - 1
    setCounter(counter)
    console.log("counter", counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value :{counter}</h2>

      <button 
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
