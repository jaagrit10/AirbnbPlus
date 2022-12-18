import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth,} from "./Fire.js";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopup from "./LoginPopup";
function Header(props) {
  const [dropdown, setdropdown] = useState(false)
  const [pop, setpop] = useState(false);
  const [user] = useAuthState(auth)
  const signIn = () => {
    // signInWithPopup(auth, provider);
    setpop(!pop);
  };
  const signout = () => {
    signOut(auth);
  };
    
  return (
    <>
    <div className="header ">
      <Link to="/">
        <img
          className="header__icon"
          width={400} height={600}
          src="https://i.ibb.co/zNbx3wG/Untitled-design.png"
          alt=""
        />
      </Link>

      <div className="headr">
        <input  className="borderremoval" />
        <SearchIcon></SearchIcon>
      </div>
      <div className="header__right">
        {!user ? (
          <Button 
         variant="contained" onClick={signIn} className="login text-black bg-inherit">
            Login
          </Button>
        ) : (
          <Button onClick={signout}>{(user.email).split(' ')[0]}</Button>
        )}
        {/* <Button onClick={signIn}>Login</Button> */}
        <LanguageIcon></LanguageIcon>
        {/* <ExpandMoreIcon></ExpandMoreIcon> */}
        <div class="relative inline-block text-left">
  <div className="out">
    {/* <button onClick={()=>setdropdown(!dropdown)} type="button" class="border-none inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 " id="menu-button" aria-expanded="true" aria-haspopup="true">
      AirSpace */}
      {/* <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button> */}
  </div>

  <div class={`text-white origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white transition ease-${dropdown ? 'out' : 'in'} duration-${dropdown ? '100' : '75'} transform opacity-${dropdown ? '300' : '0'} scale-${dropdown ? '100' : '95'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <a href="/profile" class="text-black block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="/#" class="text-black block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="/#" class="text-black block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      {/* <form method="POST" action="#" role="none"> */}
        <button type="submit" onClick={signout} class="text-red-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      {/* </form> */} 
    </div>
  </div>
</div>
        {/* <Avatar></Avatar> */}
        
      </div>
    </div>

    {pop && <div className="pop"><LoginPopup setpop = {setpop}/></div>}
    </>
  );
}
Header.defaultProps = {
  user: "Login",
};

export default Header;
