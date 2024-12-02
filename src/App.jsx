import { useState } from 'react'
import './App.css'
import { HomePageDesktop } from './components/HomePageDesktop/HomePageDesktop'
import { BlogDesktop } from './components/BlogDesktop/BlogDesktop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BlogDesktop/>
    </>
  )
}

export default App
