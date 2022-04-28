class NotesStore {
    constructor() {
        this.validNoteStates = ["completed", "active", "others"];
        this.notes = [];
    }
    
    addNote(noteState, noteName) {
            if(!noteName) throw new Error("Name cannot be empty");
            if(!this.validNoteStates.includes(noteState)) throw new Error(`Invalid state ${noteState}`);
            this.notes.push({
                name: noteName,
                state: noteState
            });
    }
    
    getNotes(state) {
        if(!this.validNoteStates.includes(state)) throw new Error(`Invalid state ${state}`);
        let results =  this.notes.filter((note)=> note.state == state);
        return results.length ? results.map((res)=> res.name) : [];
    }
}