import React from 'react'
import '../css/txtCardB.css'

const TextCardB = (props) => {
    /*
    post-submission comment: For the text card components, one idea that came through my mind to add modularity to the component might be to import the text I want to display as a prop, probably as a js object
    Assuming the layout of this component doesnt change, I could then process that text here like so: <h1>{props.srcText.header}</h1>, etc. This would allow someone to reuse this component multiple times, each with
    different content.
    */
    return (
        <div className='txtCardB'>
            <h1>PET-APPROVED</h1>
            <h2>It feels good to be a member.</h2>
            <p>After your free trial, become a full-time member with benefits for $59 a year</p>
            <ul>
                <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our entire collection of sustainable essentials</li>
                <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products you can trust.</li>
            </ul>
        </div>

    )
}

export default TextCardB