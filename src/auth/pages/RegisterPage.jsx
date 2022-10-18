import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/";

const formData = {
  email: 'emaill@test.com',
  password: '123456',
  displayName: 'Marcel Cabrera'
};

export const RegisterPage = () => {

  const { email, password, displayName, onInputChange, formState } = useForm(formData);

  const onSubmit = (event)=>{
    event.preventDefault();

    // TO DO: validate form
  }

  return (
    <AuthLayout title="Register">
        <form onSubmit={onSubmit}>
          <Grid container>
          <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Name"
                placeholder="Your full name"
                type="text"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Email"
                placeholder="user@email.com"
                type="email"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Password"
                placeholder="Enter your password"
                type="password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2}
            >
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Register
                </Button>
              </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="end" sx={{mt:2}}>
                <Typography sx={{mr: 1}}>Have an account?</Typography>
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  Sign in
                </Link>
            </Grid>


          </Grid>

        </form>
    </AuthLayout>
  )
}
