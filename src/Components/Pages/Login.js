import { Button, TextField } from '@mui/material'
import React from 'react'
import useDataFetch from '../CustomeHook/useDataFetch'
import { useForm } from "react-hook-form";
import seDataFetch from '../CustomeHook/useDataFetch'
import axios from 'axios';

function Login() {
    const { fetchData } = useDataFetch('api-server.business-log.xyz/login')

    const { register, handleSubmit } = useForm()

    const onLogin = async(data) => {
        let response = await axios.post("/login", data);
        console.log(response , 'response')
    }
    return (
        <>
            <form onSubmit={handleSubmit(onLogin)}>
                <TextField type="email" label="Email" name="email" {...register('email')} />
                <TextField type="password" label="PassWord" name="password" {...register('password')} />
                <Button type='subit' >LogIn</Button>
            </form>
        </>
    )
}

export default Login