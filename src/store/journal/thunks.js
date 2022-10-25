import { collection, doc, setDoc } from "firebase/firestore";
import { FirestoreDb } from "../../firebase/config";
import { addNewNote, setActiveNote, setSavingNote } from "./";

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