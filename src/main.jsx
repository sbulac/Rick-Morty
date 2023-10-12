import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';

const pallete = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#176363',
    },
    secondary: {
      main: '#36B377',
    },
    background: {
      default: '#C9D2EA',
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <ThemeProvider theme={pallete} >
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
