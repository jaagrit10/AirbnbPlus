import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from './SearchPage.js'
// import ProfileCard from './ProfileCard';
import LoginPopup from './LoginPopup';
import MLTest from './MLTest';
import MLtest2 from './MLtest2';
import RegisterUser from './RegisterUser';


// functionalities: slider in the banner
function App() {
  
  return (
<>
    <div className="App">
      <Router>
      
     <Routes>
     
     <Route
            
            exact
            path="/"
            element={[<Header/>,<Home/>,<Footer/>]} 
          ></Route>
    

{/* <Route
            
            exact
            path="/search"
            element={[<Header/>,<SearchPage/>,<Footer></Footer>]}  
          ></Route> */}


{/* <Route
            
            exact
            path="/profile"
            element={[<Header/>,<ProfileCard/>]} 
          ></Route> */}

<Route
            
            exact
            path="/login"
            element={<LoginPopup></LoginPopup>} 
          ></Route>

{/* <Route
            
            exact
            path="/register"
            element={[<Header/>,<RegisterUser/>]} 
          ></Route> */}

<Route
            exact
            path="/kidney"
            element={[<Header/>,<MLTest/>]} 
          ></Route>
<Route
            
            exact
            path="/liver"
            element={[<Header/>,<MLtest2/>]} 
          ></Route>
    
    
    </Routes>
    </Router>

    </div>
  </>
  );
}

export default App;
