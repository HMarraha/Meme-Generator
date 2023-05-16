import React from "react"
import trollface from "./assets/trollface.png"
export default function Header(){
    return (
        <header className="header">
            <div className="logo-container">
            <img className="header-img" src={trollface} alt="" />
            <h1 className="logo-text">Meme Generator</h1>
            </div>
            <h1 className="header-text">A React Project</h1>
        </header>
    )
         
}