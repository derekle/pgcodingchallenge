import React from 'react'
import '../css/productCard.css'
const ProductCard = (props) => {
    return (
        <div className='productCard-container'>
            <h1>OUR TREAT</h1>
            <img src={require("../" + props.imgsrc)} alt={props.altlabel}></img>
            <div id="subtext">
                <h2>Freeze Dried Minnows</h2>
                <p>Healthy ingredients with nothing to hide.</p>
            </div>
        </div>

    )
}

export default ProductCard