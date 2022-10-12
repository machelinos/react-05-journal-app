import SaveOutlined from "@mui/icons-material/SaveOutlined"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 1}} >
        <Grid item>
            <Typography fontSize={39} fontWeight="light">October 10th 2022</Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                Save
            </Button>
        </Grid>

        <Grid container direction="column">
            <Grid item>
                <TextField
                    fullWidth
                    label="Title"
                    placeholder="Add the title"
                    type="text"
                    variant="filled"
                    sx={{border: 'none', mb: 1}}
                />
            </Grid>

            <Grid item>
                <TextField
                    fullWidth
                    label="Title"
                    minRows={5}
                    multiline
                    placeholder="What happened today?"
                    type="text"
                    variant="filled"
                    sx={{border: 'none', mb: 1}}
                />
            </Grid>

        </Grid>

        <ImageGallery />

    </Grid>

  )
}
