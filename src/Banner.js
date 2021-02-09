import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'
import { useHistory } from 'react-router-dom';

function Banner() {
    const [showSearch, setShowSearch] = useState(false); // to keeping track of (search date)button clicked
    const history = useHistory() // to keep track of history of search page 

    return (
        <div className="banner">
            <div className="banner__search">
                 {showSearch && <Search/>}
                 <Button onClick = {() => setShowSearch(!showSearch)}   //if showSearch is true onclicking it becomes false and vice versa
                 variant="outlined" className="banner__searchButton">
                 {showSearch ? "Hide" : "Search Dates"}
                </Button>
                
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover hidden gems near you</h5>
                <Button variant = "outlined" onClick={() => history.push('/search')}>Explore Nearby</Button>
                {/* function to direct to search page on clicking the button */}
            </div>
        </div>
    )
}

export default Banner
