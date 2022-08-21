import React from "react";
import { useState } from "react"

function Addnote({ handleAddNotes }) {
    const [notes, setNotes] = useState("");
    const charcterLimit =200;

    const handleOnChange = (e) => {
        if(charcterLimit - e.target.value.length >= 0){
            setNotes(e.target.value)
        }
       
    }
    const handleSaveClick = () => {
        if(notes.trim().length>0){
            handleAddNotes(notes);
            setNotes('');
        }
    }

    return (
        <div className="notebody">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note"
                value={notes}
                onChange={handleOnChange}
            ></textarea>
            <div className="note-footer">
                <small>{charcterLimit-notes.length} Remaining</small>
                <button onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default Addnote;
