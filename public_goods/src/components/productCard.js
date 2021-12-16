import React from 'react'
import '../css/productCard.css'
const ProductCard = (props) => {
    return (
        <div className='productCard'>
            <h1>OUR TREAT</h1>
            <img src={require("../" + props.imgsrc)} alt={props.altlabel}></img>
            <h2>Freeze Dried Minnows</h2>
            <p>Healthy ingredients with nothing to hide.</p>
        </div>

    )
}

export default ProductCard