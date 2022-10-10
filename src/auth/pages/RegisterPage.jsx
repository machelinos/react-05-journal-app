import { Link as RouterLink } from "react-router-dom"
import Google from "@mui/icons-material/Google"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <form>
          <Grid container>
          <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Name"
                placeholder="Your full name"
                type="text"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Email"
                placeholder="user@email.com"
                type="email"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mb: 2}}>
              <TextField
                label="Password"
                placeholder="Enter your password"
                type="password"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2}
            >
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
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
