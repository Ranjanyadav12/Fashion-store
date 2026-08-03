import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import ShopbyCategory from './Components/Shopbycategory/Shopbycategory'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Hero/>
     <ShopbyCategory/>
    </>
  )
}

export default App
