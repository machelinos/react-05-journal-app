import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registeringWithEmailAndPassword } from "../../store/auth";

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [(value)=>value.includes('@'), 'Email must contain an @'],
  password: [(value)=>value.length>5, 'Password must be at least 6 characters'],
  displayName: [(value)=>value.length>0, 'Name is required']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { email, password, displayName, onInputChange, formState, emailValid, passwordValid, displayNameValid, formValid } = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state=>state.auth);

  const isChecking = useMemo(()=>status==='checking');

  const onSubmit = (event)=>{
    event.preventDefault();
    setFormSubmitted(true);

    if(!formValid) return;

    dispatch(registeringWithEmailAndPassword(formState))
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
                error={!!displayNameValid && formSubmitted}
                helperText={formSubmitted ? displayNameValid : null}
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
                error={!!emailValid && formSubmitted}
                helperText={ formSubmitted ? emailValid : null}
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
                error={!!passwordValid && formSubmitted}
                helperText={ formSubmitted ? passwordValid : null}
              />
            </Grid>

            <Grid container spacing={2}
            >
              {
                errorMessage && (
                  <Grid item xs={12}>
                    <Alert severity="error">
                      {errorMessage}
                    </Alert>
                  </Grid>
                )
              }


              <Grid item xs={12}>
                <Button type="submit" variant="contained" disabled={(!formValid && formSubmitted) || isChecking } fullWidth>
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
