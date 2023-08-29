import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState("")
  const [change, setChange] = useState(false)

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("https://v2.jokeapi.dev/joke/Any?format=txt")
      console.log(data.data);
      setJoke(data.data)
    }
    fetchdata()
  }, [change])
  
  return (
    <>
      <p>{joke}</p>
      <button 
      onClick={() => setChange(!change)}
      >
        new joke
      </button>
    </>
  )
}

export default App
