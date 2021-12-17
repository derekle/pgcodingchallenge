/*
post-submission comment: this space would have been for the top navigation bar that was 
present in the mobile design mockup. I planned to pull some assets from Material-UI to help
with the menu and search icons. The cart and item counter would probably be reading from a
store or be fetching from a backend that would keep info about a user's session.
*/

import React, { Component } from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


import Button from '@mui/material/Button';
import '../css/topNavBar.css'

class TopNav extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menuopen: false,
        }
    }

    componentDidUpdate() {
        return this.state.menuopen
        ? console.log('Menu is open')
        : console.log('Menu is closed')
    }
    
    handleOnClick = (buttonName) => {
        switch (buttonName) {
            case 'Menu':
                this.setState(
                    { menuopen: { ...!this.state.menuopen } }
            )
                break;
            case 'Search':
                console.log('Search button clicked')
                break;
            case 'Cart':
                console.log('Cart button clicked')
                break;
            default:
                return null
        }
    }

    render() {
        return (
            <div id='topnavbar-container'>
                <div id='topnavbar-left'>
                    <Button onClick={() => { this.handleOnClick('Menu') }} id='navButton'>
                        <DragHandleIcon  fontSize='medium' />
                    </Button>
                </div>
                <div id='topnavbar-center'>
                    <Link
                        className='navLink'
                        to="/"
                        style={{
                            color:'none',
                            textDecoration: 'none'
                        }}
                    >
                        <h1 id='logo'>PUBLIC <br /> GOODS</h1>
                    </Link>
                </div>
                <div id='topnavbar-left'>
                    <Button onClick={() => { this.handleOnClick('Search') }} id='navButton'>
                        <SearchIcon fontSize='medium' />
                    </Button>
                    <Button onClick={() => { this.handleOnClick('Cart') }} id='navButton'>
                        <span>Cart 0</span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default TopNav