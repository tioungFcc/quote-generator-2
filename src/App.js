import React, {useState, useEffect, useCallback} from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function App(){
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [r, setR] = useState(100)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)
    useEffect(()=>{
        setR(Math.floor(Math.random()*255))
        setG(Math.floor(Math.random()*255))
        setB(Math.floor(Math.random()*255))
    },[quote])
    function fetchQuoteAuthor(){
        fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "x-rapidapi-key": "47dc4b72ccmsh7d7e50ecf3726b3p1dd101jsnd29e0c39a99f"
            }
        })
        .then(res=>res.json())
        .then(data => {
            setQuote(data.content)
            setAuthor(data.originator.name)
        })
        .catch(err => {
            console.error(err);
        })
    }
    useEffect(()=>{
        fetchQuoteAuthor()
    },[])
    return(
        <div className="flex wrapper" style={{background:`rgb(${r},${g},${b})`}}>
            <div className="app">
            {quote? <div>
                <Header quote={quote} author={author} r={r} g={g} b={b}/> 
                <Footer fetchQuoteAuthor={fetchQuoteAuthor} r={r} g={g} b={b}/> 
            </div> : <img src="./images/loader.gif"/>
            }
            </div>
            
        </div>
    )
}