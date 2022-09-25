// To use any function add only defualt after export

// UseState with data type string 
import React, { useState } from "react";

export function UseState() {
    const [click, setClick] = useState('Belive')

    const onClick = () => {
        setClick('in Karma')
    }

    return (
        <>
            <h1>{click}</h1>
            <button onClick={onClick}>Click me</button>
        </>
    )
}



// UseState with data type Array 
export function UseStateArray() {

    const data = [
        {
            id: 0,
            name: 'Yash',
            age: '24'
        },
        {
            id: 1,
            name: 'Raj',
            age: '24'
        },
        {
            id: 2,
            name: 'Ronak',
            age: '25'
        },
    ]

    const [array , setArray] = useState(data)

    const onClear = () => {
        setArray([])
    }
    return (
        <>
            { array.map((item) => {
                    return <h1>Name : {item.name} & Age : {item.age}</h1>
                })
            }
            <button onClick={onClear}>Click Me</button>
        </>
    )
}



// UseState with data type Object
export function UseStateObject () {
    const[obj,setObj] = useState({
        name:'Yash' , age:'24' , work:'Devloper'
    })

    const onUpdate = () => {
        setObj({...obj, name:'Ronak'})
    }

    return(
        <>
        <h1>
            Name:{obj.name} Age:{obj.age} Work:{obj.work}
        </h1>
        <button onClick={onUpdate}>Update Data</button>
        </>
    )
}


//UseState challenge

export default function Todolist() {
    const data = [
        {id: 0, note: 'Charge Mobile'},
        {id: 1, note: 'Pay Mobile Bills'},
        {id: 2, note: 'Call to Mom'}
    ]

    const [mota,setMota] = useState(data)
    const onRemove = (id) => {
        const newArray = mota.filter((dataItem)=>{
            return dataItem.id !== id
        })

        setMota(newArray)
    }
    const onClear = () => {
        setMota([])
    }
    return(
        <>
            {mota.map((item) => {
                return (
                <>
                <h1>* : {item.note}</h1>
                <button onClick={() => onRemove(item.id)}>Done</button>
                </>)
            })}
            <button onClick={onClear} >Clear</button>
        </>
    )
}