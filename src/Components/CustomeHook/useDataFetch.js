import React, { useEffect, useState } from 'react'

function useDataFetch(url) {

    const [fetchData, setFetchData] = useState()

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFetchData(data))
            .then((error) => console(error))
    }, [url])


    return { fetchData }
}

export default useDataFetch