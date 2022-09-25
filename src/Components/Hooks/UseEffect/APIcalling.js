import { useEffect, useState } from "react"

export default function APIcalling() {

    const [api, setApi] = useState([])
    const getSource = async () => {
       try {
        const response = await fetch('https://api.github.com/users')
        setApi(await response.json())
       } catch (error) {
        console.log('error' + error)
       }
    }

    useEffect(() => {
        getSource()
    }, [])

    return (
        <>
            {api.map((item) => {
                console.log(item)
                const { type, login, url, followers_url } = item
                return (
                    <>
                        <img src="url"></img>
                        <h3>{login}</h3>
                        <h4>{type}</h4>
                    </>
                )
            })

            }
        </>
    )
}