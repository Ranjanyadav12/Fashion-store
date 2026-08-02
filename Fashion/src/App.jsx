import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Hero/>
    </>
  )
}

export default App
