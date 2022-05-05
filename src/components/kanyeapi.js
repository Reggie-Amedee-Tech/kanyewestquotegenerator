import React, {useEffect, useState} from 'react';
import KanyeWestApiCSS from './KanyeWestApiCSS.css'

const KanyeApiData = () => {
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(false)
        


    useEffect(() => {
        fetch("https://api.kanye.rest")
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Request Failed')
        }, networkError => {
            console.log(networkError.message)
        })
        .then(data => {
            setData([data])
            setLoading(true)
        })
    }, [])

    console.log(data)
    


    return <>
        <div className='quote'>
            
        {data.map((item, i) => {
            return <div key={i}>
                <p>{`"${item.quote}"`}</p>
                <p>- Kanye West</p>
            </div>
                

        })}
        </div>
    </>
}

export default KanyeApiData;