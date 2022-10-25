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
        loadNotes: (state, action) => {

        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
        },
        setSavingNote: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {

        },
        deleteNote: (state, action) => {

        }
    }
});

export const {
    addNewNote,
    loadNotes,
    setActiveNote,
    setSavingNote,
    updateNote,
    deleteNote
} = journalSlice.actions;