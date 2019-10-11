import React, {useState, useEffect} from 'react'

import './Look.css'
import firebase from '../../../lib/init-firebase'
import Modal from '../UI/Modal/Modal'
import Link from 'next/link'
import image from '../../images/favicon.png'
import lazyImage from '../../images/gray.jpg'
import { LazyImage } from "react-lazy-images"


const Look = (props) => {
    const [modal, setModal] = useState(false)

    const fetchVote = async (id) => {
        const res = await fetch(`https://the-v-lust.firebaseio.com/votes/${id}.json`)
        const json = await res.json()
        let jsonVotes = 0
        json ? jsonVotes = json.votes : jsonVotes = 0
        let newVote = jsonVotes + 1
        return new Promise((resolve) => {
                resolve(firebase.database().ref('votes/' + id).set({
                    pictureId: id,
                    votes: newVote,
                }))
            })
     }

    const voting = async (commonId) => {
        await fetchVote(commonId)
        setModal(true)
    }

    let url = props.url
    if (url.startsWith('http')) {
        url
    } else {
        url = 'http://' + url 
    }

    return (           
        <div className="event">
            <Modal show={modal}>
            <p className="ModalText">Thank you for voting!</p>
            <Link href='/results'><img src={image} className="ModalImage"/></Link>
            <br/>
            <Link href='/results'>Check out who's winning!</Link>
            </Modal>
            <div  className="look" onClick={(commonId) => voting(props.id)}>
                    <LazyImage 
                        src={props.image}
                        alt="LOOK"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} className="image"  src={lazyImage} style={{width: '100%', height: '100%'}} alt={imageProps.alt} />
                          )} 
                        actual={({ imageProps }) => <img className="image" {...imageProps} />} />
                    <p className="text">{(props.name).toUpperCase()}</p>
            </div>
        </div>
    )
}

export default Look

