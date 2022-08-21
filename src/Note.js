import React from "react";
import pic from "./css/trash-solid.svg"
function Note({id,text,date,handleDeleteNotes}) {



  const deleteNotes =()=>{
    handleDeleteNotes(id);
  }

  return (
    <div className="notebody">
        <p>{text}</p>
        <p>{date}
        <img src={pic} alt="" onClick={deleteNotes}></img>
        
        </p>
        
    </div>
  );
}

export default Note;
