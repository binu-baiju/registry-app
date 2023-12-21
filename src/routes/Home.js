
import React from "react"
import {Link} from "react-router-dom"

function Home(){
    return(
        <div>
            <h1 style={{color:"white"}}>Home</h1>
            <Link style={{color:"white"}} to="/registry">Click here to go to registry</Link>
        </div>
    )
}

export default Home