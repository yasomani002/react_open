// use for avoide unnececeraly re-rendering of function.
import React, { useMemo, useState } from "react"

export default function UseMemo() {

    const [mark, setMark] = useState(0)
    const [total, setTotal] = useState(10)

    const markMemo = useMemo(() => {
        console.log('hellow')
        function isOdd() {
            return mark > 35
        }
    },[mark])
    
    const changeMark = () => {
        setMark(mark + 1)
    }
    const changeTotal = () => {
        setTotal(total * 6)
    }
    return (
        <>
            <button onClick={changeMark}>Mark :- {mark}</button>
            <span>{markMemo ? 'pass' : 'fail'}</span>
            <button onClick={changeTotal}>Total :- {total}</button>
        </>
    )
}