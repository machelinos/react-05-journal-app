import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { FirestoreDb } from "../../firebase/config";
import { loadNotes, uploadFiles } from "../../helpers";
import { addNewNote, getNotes, setActiveNote, setSavingNote, setImagesToActiveNote, updateNote } from "./";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSavingNote());
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirestoreDb, `${uid}/journalApp/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const notes = await loadNotes(uid);

        dispatch(getNotes(notes));
    }
}

export const startSavingNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSavingNote());

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const noteToSave = {...activeNote};
        delete noteToSave.id;

        const docRef = doc(FirestoreDb,`${uid}/journalApp/notes/${activeNote.id}`);
        await updateDoc(docRef, noteToSave);

        dispatch(updateNote(activeNote));
    }
}

export const startUploadingImages = (files = []) => {
    return async (dispatch) => {
        dispatch(setSavingNote());

        const urlPromises = [];
        for(const file of files){
            urlPromises.push(uploadFiles(file));
        }

        const imagesUrls = await Promise.all(urlPromises);

        dispatch(setImagesToActiveNote(imagesUrls));
    }
}