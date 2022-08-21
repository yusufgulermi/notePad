import "./css/app.css"
import React, { useEffect } from "react";
import { useState } from "react";
import {nanoid} from "nanoid"
import Notes from "./Notes";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem("react-data-from-local"));
    if(savedNotes){
      setNotes(savedNotes)
    }

  },[]);
  useEffect(()=>{
    localStorage.setItem("react-data-from-local",JSON.stringify(notes))
  },[notes])


 
  const addNotes =(text)=>{
    const date =new Date();
    const newNote ={
      id:nanoid(),
      text:text,
      date:"Time: " + date.toLocaleTimeString() + " Date: " + date.toLocaleDateString()
      
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNotes =(id)=>{
    const newNotes= notes.filter((note)=>note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className="mainbody" id="mainbody">
        <Header/>
        <Notes notes={notes} handleAddNotes={addNotes} handleDeleteNotes={deleteNotes}/>
    </div>
  );
}

export default App;
