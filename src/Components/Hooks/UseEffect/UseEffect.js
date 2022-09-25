import React, { useEffect, useState } from "react"

export default function UseEffect() {
    const [count, setCount] = useState(window.screen.width)

    const actuaWidth = () => {
        setCount(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', actuaWidth)

        return () => {
            window.removeEventListener('resize', actuaWidth)
        }
    })
    return (
        <>
            <h1>{count}</h1>

        </>
    )
}