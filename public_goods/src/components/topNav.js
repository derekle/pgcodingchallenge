/*
post-submission comment: this space would have been for the top navigation bar that was 
present in the mobile design mockup. I planned to pull some assets from Material-UI to help
with the menu and search icons. The cart and item counter would probably be reading from a
store or be fetching from a backend that would keep info about a user's session.
*/

import React, { Component } from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import SearchIcon from '@mui/icons-material/Search';

import Grid from '@mui/material/Grid';
import '../css/topNavBar.css'

class TopNav extends Component{
    render() {
        return (
            <div id='topnavbar-container'>
                <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Grid item xs={5}>
                        <DragHandleIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={5}>
                        <h1>PUBLIC <br/> GOODS</h1>
                    </ Grid>
                    <Grid item>
                        <SearchIcon fontSize='medium' />
                    </Grid>
                    <Grid item xs="auto">
                        <span>Cart 0</span>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default TopNav