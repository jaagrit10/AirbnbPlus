import { Button } from '@mui/material';
import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import './Banner.css';
import Search from './Search.js'
function Banner() {
  // const history = useHistory(); 
  const [showSearch, setshowSearch] = useState(false);
  // const [LinkStyle, setLinkStyle] = useState({backgroundColor: '#ff7779', textDecoration: 'none'})
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
       
        <Button  variant='outlined'><Link to='/search' className='link' >Explore Nearby</Link> </Button>
      </div>
    </div>
    
  )
}

export default Banner