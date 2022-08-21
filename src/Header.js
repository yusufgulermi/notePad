import React from "react";

function Header(){

    const element= document.getElementById("mainbody");

    const handleDarkMode =()=>{ 
        element.classList.contains("dark-mode")?
        element.classList.remove("dark-mode"):
        element.classList.add("dark-mode");

        
    }
    return(
        <div className="header">
            <h1>NOTES</h1>
            <button onClick={handleDarkMode}>Mode</button>
        </div>
    );

}

export default Header;