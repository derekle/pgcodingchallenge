import React from 'react'
import '../css/imgCard.css'

const ImageCard = (props) => {
    return (
        <div className="ImageCard-container">
            <img className='ImageCard' src={require("../" + props.imgsrc)} alt={props.altlabel}></img>
        </div>
    )
}

export default ImageCard