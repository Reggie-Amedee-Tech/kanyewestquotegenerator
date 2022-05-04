import React, {useEffect, useState} from 'react';
import KanyeWestApiCSS from './KanyeWestApiCSS.css'

const KanyeApiData = () => {
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(false)
        


    useEffect(() => {
        fetch("https://api.kanye.rest")
        .then(response => response.json())
        .then(data => {
            setData([data])
            setLoading(true)
        })
    }, [])

    console.log(data)
    


    return <>
        <div className='quote'>
            
        {data.map((item) => {
            return <div>
                <p>{`"${item.quote}"`}</p>
                <p>- Kanye West</p>
            </div>
                

        })}
        </div>
    </>
}

export default KanyeApiData;