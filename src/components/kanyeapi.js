import React, {useEffect, useState} from 'react';

const KanyeApiData = () => {
        const [data, setData] = useState([])
        const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        fetch("https://api.kanye.rest")
        .then(response => response.json())
        .then(data => {
            setData([data])
            setLoaded(true)
        })
    }, [])

    console.log(data)


    return <>
        {data.map((item) => {
            return <p key={Math.floor(Math.random() * 200)}>{item.quote}</p>
        })}
    
    </>
}

export default KanyeApiData;