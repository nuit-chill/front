import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar.js'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <div id='outlet'>
        <Outlet />
      </div>
    </ChakraProvider>
  )
}

export default App
