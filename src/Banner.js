import { Button } from '@mui/material';
import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import './Banner.css';
import Search from './Search.js'
import SimpleImageSlider from "react-simple-image-slider";
function Banner() {
  // const history = useHistory(); 
  

const images = [
 {url: "https://images.ctfassets.net/gvy0ix4gqdkv/18gCxd3d8BrNacyellO1bM/ecd96529596dac7ea178c84891519aea/blog_size.jpg?w=2846&h=1624&fl=progressive&q=50&fm=jpg" },
 { url: "https://www.postdicom.com/images/blog-posts/social-media-images/handling-dicom-medical-imaging-data-social.png" },
  { url: "https://soulpageit.com/wp-content/uploads/2020/05/Medical-Imaging.jpg" },
  { url: "https://sites.google.com/site/theeyeofmedicine/_/rsrc/1553403808514/what-is-medical-imaging/Radiography-1-1024x576.jpg" },
];
  const [showSearch, setshowSearch] = useState(false);
  // const [LinkStyle, setLinkStyle] = useState({backgroundColor: '#ff7779', textDecoration: 'none'})
  return (
    <>
    <div className='banner mb-20'>
      <h1 className='color-white'>
        {/* YOUR HOSPITAL AT HOME */}
      </h1>
      <SimpleImageSlider
        width={1400}
        height={400}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={1.5}
      />
      
      {/* <img src="https://sites.google.com/site/theeyeofmedicine/_/rsrc/1553403808514/what-is-medical-imaging/Radiography-1-1024x576.jpg" alt="" /> */}
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHlOOzAPXZk82o3qbqjogSPcuWhCNRGZexg&usqp=CAU" alt="" /> */}
      {/* <img src="https://www.postdicom.com/images/blog-posts/social-media-images/handling-dicom-medical-imaging-data-social.png" alt="" /> */}
      {/* <img src="https://www.postdicom.com/images/blog-posts/social-media-images/handling-dicom-medical-imaging-data-social.png" alt="" /> */}
      {/* <img src="https://images.ctfassets.net/gvy0ix4gqdkv/18gCxd3d8BrNacyellO1bM/ecd96529596dac7ea178c84891519aea/blog_size.jpg?w=2846&h=1624&fl=progressive&q=50&fm=jpg" alt="" /> */}
      {/* <img src="../public/handling-dicom-medical-imaging-data-social.png" alt="" /> */}
      
      
    </div>
    <div className='prediction'>
      PREDICT YOUR DISEASES HERE!
    </div>
    </>
    
  )
}

export default Banner