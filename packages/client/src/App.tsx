import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='font-bold p-4 text-2xl'>Hello World</p>
    <Button>Click me</Button>
    </>
  )
}

export default App
