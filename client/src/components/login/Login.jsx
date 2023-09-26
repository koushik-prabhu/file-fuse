import { useTheme } from '@emotion/react'
import { Box, Button, Card, CardHeader, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { LoginBox } from '../../styles/login';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../../configurations/firebase.config';
import OTPInput from 'otp-input-react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {

  const [number, setNumber] = useState()
  const [otp, setOtp] = useState()
  const [otpPage, setOtpPage] = useState(false)

  const navigate = useNavigate();
  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.up('sm'));

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'captcha-container', {
      'size': 'invisible',
    }, auth);
  }

  const getOtp = () => {
    setOtpPage(true)
    toast.success('OTP sent successfully!', {
      theme: "dark",
      });
    // generateRecaptcha()

    // signInWithPhoneNumber(auth, "+919611973957", window.recaptchaVerifier)
    // .then((confirm) => {
    //   console.log("Done")
    //   window.confirmResult = confirm
    // }).catch((error) => {
    //   console.log("Failed")
    // });
  }
  const verifyOtp = () => {
    // window.confirmResult.confirm(otp).then((result) => {
    //   const user = result.user;
    //   console.log("OTP verified")
    //   console.log(user)
    //   // ...
    // }).catch((error) => {
    //   console.log("Invalid verified")

    //   // ...
    // });

    axios.post('/user', {name:'Koushik'})
    .then((res) => console.log('Resonse from server: ', res))
    .catch((err) => console.log('Error generated!!!!!!!!!!'))

    // navigate('/', { replace: true });
  }
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100vh' flexDirection='column' gap={4}>

        <img src={Logo} width='70px' style={{position:'absolute',top:'10px', left:'20px'}}/>
        <LoginBox>
          {!otpPage && <>
            <TextField sx={{width:'80%'}} variant="standard" placeholder='Enter your phone number' onChange={(e)=>setNumber(e.target.value)}/>
            <Button variant='contained' fullWidth={true} onClick={getOtp}>Login</Button>
          </>}
          {otpPage &&  <>
   
            <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} className='otp-field'
              inputStyles={{
                margin: '0px',
                width: '40px',
                height:'40px',
              }}/>
            <Button variant='contained' fullWidth={true} onClick={verifyOtp}>Verify</Button>
          </>}
        </LoginBox>
        <div id="captcha-container"></div>


    </Box>
  )
}

export default Login