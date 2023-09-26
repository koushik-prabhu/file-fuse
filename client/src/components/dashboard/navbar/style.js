import styled from '@emotion/styled'
import { Box } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'

export const AppBar = styled(MuiAppBar)(({theme}) => ({
    position:'static',
    background: 'inherit',

    "& .navbar-app-logo":{
        width:'40px'
    },

    "& h6":{
        fontSize:'1.1rem',
        marginLeft:'7px',
        marginTop:'1px'
    },

    "& svg":{
        color:'white',
    },

    "& .MuiToolbar-root":{
        display:'flex',
        justifyContent:'space-between'
    },

    "& .MuiInputBase-input":{
        color:'white',
    }

}))

export const Search = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    color:'white', 
    marginTop:'-4px',
    gap:'3px',
    transition:'0.1s ease-in-out',
    borderBottom:'1px solid grey',   
    width:'100%',
    padding:'0px 10px',

    "& svg":{
        background:'transparent',
        opacity:'0.7',
        fontSize:'1.3rem'
    }
}))