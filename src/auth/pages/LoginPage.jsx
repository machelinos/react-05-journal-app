import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import Google from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, checkingGoogleSignInAuthentication } from "../../store/auth";

export const LoginPage = () => {

  const { formState, email, password, onInputChange } = useForm({
    email: 'marcel@me.com',
    password: '123456'
  });

  const dispatch = useDispatch();

  const onSubmit = (event)=>{
    event.preventDefault();

    dispatch(checkingAuthentication(formState));
  }

  const onGoogleSignIn = ()=>{
    dispatch(checkingGoogleSignInAuthentication(formState));
  }

  return (
    <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Email"
                name="email"
                placeholder="user@email.com"
                type="email"
                value={email}
                fullWidth
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                fullWidth
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2}
            >
              <Grid item xs={12} md={6}>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={onGoogleSignIn}
                >
                  <Google />

                  <Typography sx={{ml: 1}} >Google</Typography>
                  
                </Button>
              </Grid>

            </Grid>

            <Grid container justifyContent="end" sx={{mt:2}}>
              <Grid item>
                <Link component={RouterLink} color="inherit" to="/auth/register">
                  Sign up
                </Link>
              </Grid>
            </Grid>


          </Grid>


        </form>
    </AuthLayout>

  )
}
