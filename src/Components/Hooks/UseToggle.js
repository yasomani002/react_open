import React, { useState } from "react"

function UseToggle () {
    const [click,setClick] = useState('Belive in')

    const onToggle = () => {
       let name = click
       name === "Belive in" ? setClick("Yash") : setClick("Belive in")
    }
    return(
        <>
        <h1>{click}</h1>
        <button onClick={onToggle}>Click me</button>
        </>
    )
}

export default UseToggle;