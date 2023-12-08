import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar.js'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import { extendTheme } from '@chakra-ui/react'

function App() {
  const font = useSelector((state: RootState) => state.fontSize.value);
  const theme = extendTheme({
    components: {
      Button: {
        sizes: {
          lg: {
            fontSize: font + 4 + 'px',
          },
          md: {
            fontSize: font + 'px',
          }
        },
      },
      Heading: {
        sizes: {
          xl: {
            fontSize: font + 10 + 'px',
          },
          lg: {
            fontSize: font + 6 + 'px',
          },
          md: {
            fontSize: font + 2 + 'px',
          }
        }
      }
    }
  })

  return (
    <ChakraProvider theme={ theme }>
      <div style={{fontSize: (font + 'px')}}>
        <Navbar />
        <div id='outlet'>
          <Outlet />
        </div>
      </div>
    </ChakraProvider>
  )
}

export default App
