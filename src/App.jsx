import { Box, Typography, AppBar, Toolbar } from '@mui/material'
import { ApiProvider } from './Components/Context/Context'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar/NavBar'
import Docs from './Pages/Docs'
import Dev from './Pages/Dev'

function App() {

  return (
    <ApiProvider>

      <AppBar position="static">
        <Toolbar>
          <Typography variant='h2' fontWeight={400} color='inherit' sx={{ flexGrow: 1 }} >WikiRick</Typography>
          <NavBar />
        </Toolbar>
      </AppBar>

      <Box sx={{
        minHeight: '100vh',
        overflowX: 'hidden',
        p: 2, backgroundColor: '#D7DBDD',
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/dev' element={<Dev />} />
        </Routes>

      </Box>
    </ApiProvider >
  )
}

export default App
