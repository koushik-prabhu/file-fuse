import styled from "@emotion/styled";
import { Box } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 240;

export const SidebarContainer = styled(Box)(({theme, open}) => ({

    flexBasis:open?'240px':'auto',
    flexShrink:'0',
    color:'white',
    minHeight:'100vh',
    backgroundImage: 'linear-gradient(to bottom, #000000, #080708, #0e0e0f, #131414, #171818, #181919, #18191a, #191a1b, #161818, #141516, #111212, #0e0f0f)',

    "& .sidebar-logo":{
        width:'40px',
    },
    [theme.breakpoints.down('lg')]:{
        flexBasis:'80px'
    },
    // [theme.breakpoints.down('md')]:{
        
    // }

}))

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),


    "& .MuiPaper-root":{
        backgroundImage: 'linear-gradient(to bottom, #000000, #080708, #0e0e0f, #131414, #171818, #181919, #18191a, #191a1b, #161818, #141516, #111212, #0e0f0f)',
        color:'white',
        boxShadow:'-2px -2px 5px 0px white',
    },

    "& svg":{
        color:'white'
    }
    }),
  );

export const DrawerHeader = styled('div')(({ theme, open}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: open?theme.spacing(0,1,0,0):theme.spacing(0, 1.45),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

