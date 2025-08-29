import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [allowNumbers, setNumber] = useState(false)
  const [allowChars, setChar] = useState(false)

  //useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(allowNumbers) str+= "0123456789";
    if(allowChars) str+= "+[]{}()!@#$%^&*-_=";

    for(let i =0; i<length; i++)
    {
      pass += str[Math.floor(Math.random()*str.length)]
    }

    setPassword(pass)

  },[length,setPassword,allowChars,allowNumbers])




  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,19)
    window.navigator.clipboard.writeText(password)
  },[password])




  useEffect(()=>{
    //calls password generator(pg) function everytime there is a change in dependencies
    //everytime length,allowNumbers,allowChars changes => passwordGenerator based on them only also changes
    // thus to make react use newer version of pg, pg is also passed in dependency array
    passwordGenerator();
  },[length,allowNumbers,allowChars,passwordGenerator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // this links our input box to passwordref
            //we do this so that we can access the input box for copyToClipBoard functionality
        />
        <button
        onClick={copyToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={27}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={allowNumbers}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={allowChars}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
}

export default App
