import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Registry(){

    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)
    const addItem = (e) => {
        e.preventDefault()
        if (error) return;
        const tempData = [...registryData]
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")       

    }
    
    useEffect(() => {
        if(textInput.length > 10) setError(true)
        else setError(false)
    }, [textInput])

    const removeItem = (index) => {
        const newData = [...registryData]
        newData.splice(index, 1)
        setRegistryData(newData)
    }

    const editItem = (index) =>{
        if(error) return;
        const newDate = [...registryData]
        newDate[index] = textInput
        setRegistryData(newDate)
        setTextInput("")
    }
    console.log(registryData)

    
    return(
        <div class="registry">
            <h1 style={{color:"white"}}>Registry</h1>
            <Link style={{color:"white"}} to="/">Click here to go to home</Link>
            <form onSubmit={addItem}>
                <label>  
                    <input type="text" value={textInput} onChange={(e=> setTextInput(e.target.value))}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
            {error ? <span style={{color:"red"}}>Error occurred.</span> : null}
            {
                registryData.map((item, index) =>{
                    return(
                        <li key={index}>{item} <button onClick={() => removeItem(index)}>Remove</button>
                        <button onClick={() => editItem(index)}>Edit</button><br/><br/> </li>
                        
                    )
                })
            }
        </div>
    )
}

export default Registry