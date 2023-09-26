import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const RightbarContainer = styled(Box)(({theme}) => ({

    color:'white',
    minHeight:'100vh',
    flexBasis:'210px',
    flexShrink:'0',
    background:'green',
    marginLeft:'auto',
    // [theme.breakpoints.up('lg')]:{
        
    // },
    [theme.breakpoints.down('md')]:{
        display:'none'
    }

}))

