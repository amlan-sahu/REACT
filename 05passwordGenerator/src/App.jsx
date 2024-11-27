import { useState, useCallback , useEffect, useRef} from 'react'



function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setSetCharAllowed] = useState(false);
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed , setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 mt-10 bg-gray-700 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input type="text" 
          value={password} 
          className="w-full px-3 py-1"
          placeholder='Password'
          readOnly 
          ref={passwordRef}/>
          <button
          onClick = {copyPasswordToClipBoard}
          className='outline-none px-3 py-0.5 bg-blue-700 text-white shrink-0 hover:bg-blue-800 active:bg-blue-900'
          >copy</button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}/>
             <label >length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
             defaultChecked={numberAllowed}
             id='numberInput'
             onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
             <label htmlFor="numberInput"
               >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
             defaultChecked={charAllowed}
             id='charInput'
             onChange={()=>{setSetCharAllowed((prev)=>!prev)} }/>
             <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
