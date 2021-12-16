import React from 'react'

const ImageCard = (props) => {
    return <img className='ImageCard' src={require("../"+props.imgsrc)} alt={props.altlabel}></img>
}

export default ImageCard