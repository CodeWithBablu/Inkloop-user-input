import { useState } from 'react'


function App() {
  const [message, setMessage] = useState("")


  function createMessage(value) {

    value = parseInt(value);

    if (isNaN(value))
      setMessage(``);
    else if (value < 0)
      setMessage(`OOPS!! Please Enter a Positive Value`);
    else {
      setMessage(`${value += 2}, ${value += 2}, ${value += 2}`)
    }
  }

  return (
    <div className=" flex flex-col bg-[#dcf1fa] justify-center items-center h-screen">

      <div className=' w-96'>

        <input
          className='w-full h-10 mb-4 ring-2 ring-sky-400 shadow-xl shadow-cyan-500 rounded-md px-6 text-2xl font-dynapuff'
          type="number"
          onChange={(e) => createMessage(e.target.value)}
        />

        <span className='w-full font-semibold text-md font-poppins'>{message}</span>

      </div>

    </div>
  )
}

export default App
