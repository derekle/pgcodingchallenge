import React, { Component } from 'react'
import '../css/claimButton.css'

class ClaimButton extends Component {
    handleOnClick = () => {
        console.log('Offer claimed!!!!')
    }
    render() {
        return (
            <button className="ClaimButton" onClick={this.handleOnClick}>Claim your free offer</button>
        )
    }
}

export default ClaimButton