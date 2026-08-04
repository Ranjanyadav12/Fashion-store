import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import ShopbyCategory from './Components/Shopbycategory/Shopbycategory'
import NewArrivals from './Components/NewArrivals/NewArrivals'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Hero/>
     <ShopbyCategory/>
     <NewArrivals/>
    </>
  )
}

export default App
