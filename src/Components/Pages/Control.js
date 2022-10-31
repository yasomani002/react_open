import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from './TextFiled'

function Control() {
    const { register, handleSubmit, control, watch , getValues, setValue } = useForm()
    const [text, setText] = useState()
    console.log(getValues()?.fname)
    const addData = (item) => {
        console.log(item)

    }
            




    const dataShow = (e) => {
        console.log(e.target.value, 'show')
    }
    return (
        <>
            <form onSubmit={handleSubmit(addData)}>
                <Controller
                    control={control}
                    name={'fname'}
                    render={({onChange, value, name, ref}) => {
                        return (
                        <TextField name={name} ref={ref} label="name" value={value} onChange={(e) => setText(e.target.value)} id="name"  />
                        )
                    }
                    }
                />

                {/* <input type="text" name="name" label="name"  {...register('name')} /> */}
                {/* <Controller
                    control={control}
                    name="with controller"
                    render={({ onChange, onBlur, value, name }) => (
                        <input {...{ onChange, onBlur, value, name }} />
                    )}
                /> */}
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default Control