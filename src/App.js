import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from './SearchPage.js'
import ProfileCard from './ProfileCard';
import LoginPopup from './LoginPopup';
import Register from './Register';
import MLTest from './MLTest';

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
    

<Route
            
            exact
            path="/search"
            element={[<Header/>,<SearchPage/>,<Footer></Footer>]}  
          ></Route>


<Route
            
            exact
            path="/profile"
            element={[<Header/>,<ProfileCard/>]} 
          ></Route>

<Route
            
            exact
            path="/login"
            element={<LoginPopup></LoginPopup>} 
          ></Route>

<Route
            
            exact
            path="/register"
            element={[<Header/>,<Register/>]} 
          ></Route>

<Route
            
            exact
            path="/ml"
            element={[<Header/>,<MLTest/>]} 
          ></Route>

    
    
    </Routes>
    </Router>

    </div>
  </>
  );
}

export default App;
