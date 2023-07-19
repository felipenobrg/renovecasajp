import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../src/routes/routes'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
       <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
