import { Button } from '@mui/material';
import React from 'react'
import './Banner.css';
function Banner() {
  return (
    <div className='banner'>
      <div className="banner__search">
        <Button className="banner__searchButton" variant='outlined'>Search Dates</Button>
      </div>
      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems around you
        </h5>
        <Button variant='outlined'> Explore Nearby</Button>
      </div>
    </div>
    
  )
}

export default Banner