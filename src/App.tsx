import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/styles/themes/default'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  )
}
