import React from 'react'
import {MainContainer} from './style.js'
import Sidebar from './sidebar/Sidebar.jsx'
import Rightbar from './rightbar/Rightbar.jsx'
import { Box } from '@mui/material'
import Navbar from './navbar/Navbar.jsx'
import MySpace from './my-space/MySpace.jsx'
const Dashboard = () => {
  return (
    <MainContainer>
      <Sidebar/>
      <Box className='feed-container'>
        <Navbar/>
        <MySpace/>
      </Box>
    </MainContainer>
  )
}

export default Dashboard