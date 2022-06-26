import { Button } from '@mui/material';
import React, {useState} from 'react'
import './Banner.css';
import Search from './Search.js'
function Banner() {
  const [showSearch, setshowSearch] = useState(false); 
  return (
    
    <div className='banner'>
      <div className="banner__search">
        <Button onClick={()=>setshowSearch(!showSearch)} className="banner__searchButton" variant='outlined'>{!showSearch ? "Search Dates" : "Hide"}</Button>
        {showSearch && <Search></Search> }
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