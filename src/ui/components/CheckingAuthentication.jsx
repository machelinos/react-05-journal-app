import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuthentication = () => {
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
        >
            <CircularProgress color="warning" />
        </Grid>

    </Grid>

  )
}
