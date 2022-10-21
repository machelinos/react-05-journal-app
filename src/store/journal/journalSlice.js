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

        },
        loadNotes: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setSavingNote: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNote: (state, action) => {

        }
    }
});

const {
    addNewNote,
    loadNotes,
    setActiveNote,
    setSavingNote,
    updateNote,
    deleteNote
} = journalSlice.actions;