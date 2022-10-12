import StarOutline from "@mui/icons-material/StarOutline"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={0}
        sx={{minHeight: 'calc(100vh - 150px)', backgroundColor:'primary.main', borderRadius: 2}}
    >
        <Grid item>
            <StarOutline sx={{color: 'white', fontSize: 100}} />
        </Grid>

        <Grid item>
            <Typography variant="h5" sx={{color: 'white'}}>Create or select a note</Typography>
        </Grid>

    </Grid>

  )
}
