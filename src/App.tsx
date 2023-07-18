import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>iu</h1>
    </ThemeProvider>
  )
}

export default App
