import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title=''}) => {
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
                { title }
            </Typography>

            { children }

        </Grid>
    </Grid>

  )
}
