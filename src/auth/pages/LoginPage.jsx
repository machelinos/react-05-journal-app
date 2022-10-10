import { Link as RouterLink } from "react-router-dom";
import Google from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={0}
      sx={{minHeight: '100vh', backgroundColor:'primary.main'}}
    >
      <Grid
        item
        xs={3}
        className="box-shadow"
        sx={{padding: 4, backgroundColor: 'white', borderRadius: 2}}
      >
        <Typography variant="h5" sx={{mb: 2}}>
          Login
        </Typography>

        <form>
          <Grid container>
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
              <Grid item xs={12} md={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} md={6}>
                <Button variant="contained" fullWidth>
                  <Google />

                  <Typography sx={{ml: 1}} >Google</Typography>
                  
                </Button>
              </Grid>

            </Grid>

            <Grid container justifyContent="end" sx={{mt:2}}>
              <Grid item>
                <Link component={RouterLink} color="inherit" to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>


          </Grid>


        </form>


      </Grid>
    </Grid>
  )
}
