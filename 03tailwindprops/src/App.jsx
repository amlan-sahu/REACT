

import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>

      <Card username="John Doe" btnText="visit me" />
      <Card username="Amlan Sahu" btnText="click me" />
    </>
  )
}

export default App
