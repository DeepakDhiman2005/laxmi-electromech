import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';
import MyTheme from './theme/MyTheme';
import MainRouter from './router/MainRouter';
import { HeadProvider } from 'react-head';

function App() {

  return (
    <HeadProvider>
      <ThemeProvider theme={MyTheme}>
        <CssBaseline />
        <MainRouter />
      </ThemeProvider>
    </HeadProvider>
  )
}

export default App
