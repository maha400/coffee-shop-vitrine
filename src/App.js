import React from 'react';
import {BrowserRouter, Route,Switch, Routes} from 'react-router-dom';
import Home from './Home.js';
import Vitrine from './Vitrine';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} ></Route>
    <Route exact  path="/vitrine" element={<Vitrine />}> </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
