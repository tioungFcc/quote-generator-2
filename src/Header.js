import React from "react"

export default function Header({quote, author, r, g, b}){
    return(
        <div className="header" style={{color:`rgb(${r},${g},${b})`}}>
            {!author && <img src="./images/loader.gif"/>}
            <p className="quote">{quote}</p>
            {author && <p className="author">--{author}--</p>}
        </div>
    )
}