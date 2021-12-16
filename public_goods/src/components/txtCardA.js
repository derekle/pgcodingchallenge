import React from 'react'
import '../css/txtCardA.css'

const TextCardA = (props) => {
    /*
    post-submission comment: For the text card components, one idea that came through my mind to add modularity to the component might be to import the text I want to display as a prop, probably as a js object
    Assuming the layout of this component doesnt change, I could then process that text here like so: <h1>{props.srcText.header}</h1>, etc. This would allow someone to reuse this component multiple times, each with
    different content.
    */
    return (
        <div className='txtCardA'>
            <h1>Treat your pet (and you).<br/>It's on us!</h1>
            <p>Treat your pet to a healthy treat for <b>free</b> to kick off your Public Goods trial membership</p>
            <h2>See what it's like to be a Public Goods member.</h2>
            <ul>
                <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our entire collection of sustainable essentials</li>
                <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products you can trust.</li>
            </ul>
        </div>

    )
}

export default TextCardA