import {Box, Button, Grid, ThemeProvider, createTheme } from '@mui/material'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './styles/App.css'
import Login from './components/login/Login';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/dashboard/Dashboard';

const theme = createTheme({
  palette:{
    green: '#0ca50f',
    darkgreen: '#067908',
    black: '#000000',
    white: '#ffffff'
  }
  
})

function App() {


  return (
    <ThemeProvider theme={theme}>
      <Box className="main-box" sx={{backgroundImage: 'linear-gradient(to bottom, #000000, #080708, #0e0e0f, #131414, #171818, #181919, #18191a, #191a1b, #161818, #141516, #111212, #0e0f0f)', width:'100%',}}>
        <BrowserRouter >
          <Routes>
            {/* <Route path="/" element={<Homepage/>}/> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>

      <ToastContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
