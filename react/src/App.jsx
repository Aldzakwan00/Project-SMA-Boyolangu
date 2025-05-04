import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <nav className='bg-gray-800 p-4'>
          <div className='flex items-center justify-between'>
            <div className='text-white text-lg font-bold'>My App</div>
            <ul className='flex space-x-4'>
              <li><a href='#' className='text-gray-300 hover:text-white'>Home</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white'>About</a></li>
              <li><a href='#' className='text-gray-300 hover:text-white'>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
