import React, { useState } from "react";
import Note from "./Note";
import Addnote from "./Addnote";
import pic from "./css/magnifying-glass-solid.svg"
function Notes({ notes, handleAddNotes, handleDeleteNotes }) {

  const [search, setSearch] = useState("");


  return (
    <div className="notes-bar">
      <div className="nav-bar">
          <img src={pic} alt=""/>
          <input className="search-bar" type="text" placeholder='Search...' onChange={(event) => {
        setSearch(event.target.value);
      }}></input>
      </div>
      
      
      <div className="notesbody">

        {notes.filter((note) => {
          if (search === "") {
            return notes;
          }
          else if (note.text.toLowerCase().includes(search.toLowerCase())) {
            return notes;
          }
          else{
            return "";
          }
        }).map((note) =>
          <Note key={note.id} id ={note.id} text={note.text} date={note.date} handleDeleteNotes={handleDeleteNotes} />)}
          <Addnote handleAddNotes={handleAddNotes} />
      </div>
    </div>

  );
}

export default Notes;
