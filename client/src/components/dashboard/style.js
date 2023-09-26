import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainContainer = styled(Box)(({theme}) => ({

    width:'100%',
    color:'white',
    minHeight:'100vh',
    height:'auto',
    background:'inherit',
    display:'flex',
    position:'relative',
    flexDirection:'row',

    "& .feed-container":{
        backgroundImage:'inherit',
        // backgroundImage: 'linear-gradient(to bottom, #000000, #080708, #0e0e0f, #131414, #171818, #181919, #18191a, #191a1b, #161818, #141516, #111212, #0e0f0f)', width:'100%',
        backgroundRepeat:'repeat',
        width:'100%',
        backgroundPosition: 'center top',
        backgroundSize: '100% auto'
    },



}))

