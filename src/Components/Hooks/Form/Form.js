import React, { useState } from "react";

export default function Form() {

    const [mail, setEmail] = useState('')
    const [pass, setPassword] = useState('')

    const [array, setArray] = useState([])
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (mail && pass) {
            const newArray = { email: mail, password: pass }

            setArray([...array, newArray])
            setEmail('')
            setPassword('')
        }
        else { alert('Fill the data') }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={mail}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            
            <div>
                {
                    array.map((item) => {
                        return (
                            <>
                                <h1>{item.email}</h1>
                                <h2>{item.password}</h2>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}