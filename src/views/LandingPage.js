import React from "react";
import KanyeImage from '../images/kanye.jpeg'
import LandingPageCSS from './LandingPage.css'



const LandingPage = (props) => {
    const { data } = props;


    console.log(data)

    return <>
    

        <div className="landingPage">
            <img src={KanyeImage}></img>          
        </div>
    </>
}

export default LandingPage;