// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Link from '@mui/material/Link'; // เพิ่ม import Link
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CircularProgress, circularProgressClasses, colors, Stack } from '@mui/material';


const Theme = createTheme({
  palette: {
    primary: {
      main: "#313131",
    },
    secondary: {
      main: "#C70039",
    },
    info: {
      main: "#164DC9",
    },
  },
});

export default function Login() {
  const navigate = useNavigate();


  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  const onSignin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setOnRequest(true);

    const interval = setInterval(() => {
      setLoginProgress(prev => prev + 100 / 40);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2100);

    setTimeout(() => {
      navigate("/home");
    }, 3300);
  };
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={Theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button  color='secondary' onClick={() => navigate('/SignUp')}>Sign Up</Button>
          
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSignin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign In
            </Button>
                      {/* loading box */}
          {onRequest && (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: colors.common.white,
                zIndex: 1000
              }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200] }}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  value={loginProgress}
                  size={100}
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round"
                    },
                    position: "absolute",
                    left: 0,
                    color: colors.green[600]
                  }}
                />
              </Box>
            </Stack>
          )}
          {/* loading box */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
