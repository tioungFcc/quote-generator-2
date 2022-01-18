import React from "react"

export default function Footer({r,g,b, fetchQuoteAuthor}){
    return(
        <div className="footer">
            <div className="social">
                <i className="flex fab fa-twitter"></i>
                <i className="flex fab fa-tumblr"></i>
            </div>

            <button 
                className="btn" style={{background:`rgb(${r},${g},${b})`}}
                onClick={fetchQuoteAuthor}
            >
                new quote
            </button>

        </div>
    )
}