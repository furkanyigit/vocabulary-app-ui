import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItem from './MainListItem';
import Home from '../components/Home';
import VocabHome from '../components/VocabHome';
import Practic from '../components/Practic';
import FirstBox from '../box/FirstBox';
import SecondBox from '../box/SecondBox';
import ThirdBox from '../box/ThirdBox';
import VocabularyList from '../components/VocabularyList';
import { Route, Routes } from 'react-router-dom';
import VocabularyHomeTitle from '../Title/VocabularyHomeTitle';
import VocabularyListTitle from '../Title/VocabularyListTitle';
import HomeTitle from '../Title/HomeTitle';
import PracticTitle from '../Title/PracticTitle';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={true}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
                              <div
                // sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 10000, }}
                >
                  <Routes>
                    <Route path="/" element={<HomeTitle/>} />
                    <Route path="/vocabHome"  element={<VocabularyHomeTitle/>} />
                    <Route path='/vocabularyList' element={<VocabularyListTitle/>} />
                    <Route path='/practic' element={<PracticTitle />} />
                    {/* <Route path="/firstbox" element={<FirstBox />} />
                    <Route path='/secondbox' element={<SecondBox />} />
                    <Route path='/thirdbox' element={<ThirdBox />} /> */}
                  </Routes>
                </div>
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
          
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItem></MainListItem>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container className='DashboardMiddleContainer' maxWidth="lg" sx={{ mt: 4, mb: 4,}}>
            <Grid className='DashboardMiddleMainGrid' container spacing={3}>
              {/* Chart */}
              <Grid >

                <div
                // sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 10000, }}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vocabHome"  element={<VocabHome header="Vocabulary Home"/>} />
                    <Route path='/practic' element={<Practic />} />
                    <Route path='/vocabularyList' element={<VocabularyList />} />
                    <Route path="/firstbox" element={<FirstBox />} />
                    <Route path='/secondbox' element={<SecondBox />} />
                    <Route path='/thirdbox' element={<ThirdBox />} />
                  </Routes>
                </div>

              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default function Dashboard() {
  return <DashboardContent />;
}
