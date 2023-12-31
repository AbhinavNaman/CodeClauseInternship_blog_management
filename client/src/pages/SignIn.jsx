import  React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signin} from '../actions/auth'


export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
     email:'', password:''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(formData, navigate))
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
          }}
        >
          <Typography component="h1" variant="h5">
            Admin Log in
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , bgcolor:'#08A045'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
              <Button color="inherit"><Link to="/signup" exact>SignUp</Link></Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}