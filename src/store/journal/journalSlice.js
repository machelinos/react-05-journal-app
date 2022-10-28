import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
/*         activeNote: {
            id: 'abcde',
            title: '',
            body: '',
            date: 123456,
            imageUrls: []
        } */
    },
    reducers: {
        addNewNote: (state, action) => {
            state.isSaving = false;
            state.notes.push(action.payload);
        },
        getNotes: (state, action) => {
            state.notes = action.payload;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        setSavingNote: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.messageSaved = `${action.payload.title} succesfully updated`;
            state.notes = state.notes.map(note=>{
                if(note.id === action.payload.id){
                    note = action.payload;
                }
                return note;
            })

        },
        deleteNote: (state, action) => {

        }
    }
});

export const {
    addNewNote,
    getNotes,
    setActiveNote,
    setSavingNote,
    updateNote,
    deleteNote
} = journalSlice.actions;