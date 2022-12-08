import UploadFileOutlined from "@mui/icons-material/UploadFileOutlined"
import SaveOutlined from "@mui/icons-material/SaveOutlined"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { format } from "date-fns"
import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useForm } from "../../hooks/useForm"
import { setActiveNote, startSavingNote, startUploadingImages } from "../../store/journal"
import { ImageGallery } from "../components"

export const NoteView = () => {
    const dispatch = useDispatch();
    const { activeNote, messageSaved, isSaving } = useSelector(state=>state.journal);

    const {body, date, title, formState, onInputChange } = useForm(activeNote);
    
    const dateFormatted = useMemo(()=>{
        return format(date, 'MMMM d, yyyy')
    },[date]);

    const fileInputRef = useRef();

    useEffect(()=>{
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(()=>{
        if(messageSaved.length > 0){
            Swal.fire('Note updated',messageSaved,'success');
        }
    }, [messageSaved]);

    const onClickSave = () => {
        dispatch(startSavingNote());
    }

    const onInputFileChange = ({target}) => {
        dispatch(startUploadingImages(target.files));
    }

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 1}} >
        <Grid item>
            <Typography fontSize={39} fontWeight="light">{ dateFormatted }</Typography>
        </Grid>

        <Grid item>
            <input 
                type="file"
                multiple
                ref={fileInputRef}
                onChange={onInputFileChange}
                style={{display: 'none'}}
            />

            <Button
                color="primary"
                disabled={isSaving}
                onClick={()=>{ fileInputRef.current.click() }}
            >
                <UploadFileOutlined sx={{fontSize: 30, mr: 1}} />
            </Button>

            <Button
                color="primary"
                disabled={isSaving}
                sx={{padding: 2}}
                onClick={onClickSave}
            >
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
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid item>
                <TextField
                    fullWidth
                    label="Note"
                    minRows={5}
                    multiline
                    placeholder="What happened today?"
                    type="text"
                    variant="filled"
                    sx={{border: 'none', mb: 1}}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

        </Grid>

        <ImageGallery images={activeNote.imageUrls} />

    </Grid>

  )
}
