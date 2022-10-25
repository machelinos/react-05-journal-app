import AddOutlined from "@mui/icons-material/AddOutlined"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {

  const {isSaving, activeNote} = useSelector(state=>state.journal)

  const dispatch = useDispatch();

  const onClickAddNewnote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {
        !!activeNote ? <NoteView /> : <NothingSelectedView />
      }
      
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position:'fixed',
          right: 50,
          bottom: 50
        }}
        disabled={isSaving}
        onClick={onClickAddNewnote}
      >
        <AddOutlined sx={{fontSize: 30}} />
      </IconButton>

    </JournalLayout>
  )
}
