import styled from "@emotion/styled";
import { Box, createTheme } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const LoginBox = styled(Box)(({theme}) => ({

    boxShadow:'0px 0px 10px -5px white',
    minWidth:'450px',
    padding:'4em 2em',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    color:'white',

    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },

    '& button':{
        background:'green',
        marginTop:'2em',
        width:'85%',
        "&:hover":{
            background:'darkgreen'
        }
    },

    "& input":{
        color:'white',
        borderBottom:'2px solid white',
        letterSpacing:'2px',
        justifyContent:'space-between',
        alignItems:'center',
        "::placeholder":{
            color:'white'
        }
    },

    "& .otp-field":{
        width:'82%',
        justifyContent:'space-between',

        "& input":{
            borderRadius:'5px',
            border:'none',
            boxShadow:'0px 0px 3px 1px grey',
            background:'black',
            fontSize:'1rem',
            padding:'0px',

            "&:focus":{
                border:'none',
                outline:'none',
            }
        }

    }

}))

