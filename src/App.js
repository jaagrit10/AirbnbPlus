import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from './SearchPage.js'
function App() {
  return (
<>
    <div ClassName="App">
      <Router>
      <Header />
     <Routes>
    
    
    <Route
            
            exact
            path="/"
            element={<Home />} 
          ></Route>

<Route
            
            exact
            path="/search"
            element={<SearchPage/>} 
          ></Route>
    
    </Routes>
    <Footer />
    </Router>
    </div>
  </>
  );
}

export default App;
