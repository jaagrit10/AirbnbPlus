// import React from 'react'
// import "./SearchResult.css"
// import FavoriteBorderIcon from '@mui/icons-material/Favorite';
// import StarIcon from '@mui/icons-material/Star';
// import { useState } from 'react';

// function SearchResult({
    
//     img,location,title,description,star,price,total
// }) {
//     const [heart, setheart] = useState(false);
//   return (
//     <div className='searchResult'>
//         <img src=   {img} alt=""  onClick={()=>setheart(!heart)}/>
//         {!heart && <FavoriteBorderIcon className="searchResult__heart" style={{color: 'lightgray'}}></FavoriteBorderIcon>}
//         {heart && <FavoriteBorderIcon className="searchResult__heart" style={{color: 'red'}}></FavoriteBorderIcon>}
//         <div className='searchResult__info'>
//                 <div className="searchResult__infoTop">
//                     <p>{location}</p>
//                     <h3>{title}</h3>
//                     <p>____</p>
//                     <p>{description}</p>
//                 </div>

//                 <div className="searchResult__infoBottom">
//                     <div className="searchResult__stars">
//                         <StarIcon className="searchResult__star" />
//                         <p>
//                             <strong>{star}</strong>
//                         </p>
//                     </div>
//                     <div className='searchResults__price'>
//                         <h2>{price}</h2>
//                         <p>{total}</p>
//                     </div>
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default SearchResult