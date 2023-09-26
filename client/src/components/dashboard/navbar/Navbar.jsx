import { Box, IconButton, InputBase, TextField, Toolbar, Typography } from '@mui/material'
import { AppBar } from './style'
import Logo from '../../../assets/img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from './style';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <Box display='flex' alignItems='center' flexShrink='0'>
                    <img src={Logo} className='navbar-app-logo'/>
                    <Typography variant='h6'>File Fuse</Typography>
                </Box>
                <Box>
                    <Search>
                        <SearchIcon/>
                        <InputBase placeholder='Search...'/>
                    </Search>
                </Box>
                <Box>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
                </Box>
            </Toolbar>


        </AppBar>
        
    </Box>
  )
}

export default Navbar