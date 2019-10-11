import React from 'react'

import './WinnerLook.css' 
import Spinner from '../UI/Spinner/Spinner'
import lazyImage from '../../../src/images/gray.jpg'
import { LazyImage } from "react-lazy-images"

const WinnerLook = (props) => {
    let url = props.url
    if (url.startsWith('http')) {
        url
    } else {
        url = 'http://' + url 
    }

    let winnerLook = (        
        <div className="WinnerLookDiv">
            <div className="WinnerLookCont">
                <p className="WinnerLookName">{(props.name).toUpperCase()}</p>
                <LazyImage 
                        src={props.imageUrl}
                        alt="WINNER LOOK"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} className="WinnerLookPic"  src={lazyImage} alt={imageProps.alt} />
                          )} 
                        actual={({ imageProps }) => <img className="WinnerLookPic" {...imageProps} />} />
                <div className="totalVotes">{props.votes > 1 ? props.votes + " VOTES" : props.votes + " VOTE"}</div>
                <a href={url} target="_blank">GET THE LOOK</a>
            </div>
        </div>
    )

     

    return (
        <div>{props.imageUrl ? winnerLook : <Spinner/>}</div>
    )
}

export default WinnerLook