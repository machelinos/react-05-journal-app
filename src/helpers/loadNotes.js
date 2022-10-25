import { collection, getDocs } from "firebase/firestore";
import { FirestoreDb } from "../firebase/config";

export const loadNotes = async (uid = '') => {
    if(!uid) throw new Error('There is not a valid uid');

    const notesCollectionRef = collection(FirestoreDb,`${uid}/journalApp/notes`);
    const queryNotes = await getDocs(notesCollectionRef);

    let notes = [];
    queryNotes.forEach(doc=>{
        notes.push({id: doc.id, ...doc.data() });
    });

    return notes;

}