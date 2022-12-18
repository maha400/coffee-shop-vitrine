import React from "react";
import Button from "./Buttons";
import './Home.css';
import { NavLink } from 'react-router-dom'
function Home(){
    return(
        
        <section className="home-container">
           
            <div className="home-text">BISTRO LA FOURCHETTE</div>
            <h1>SAVEURS DE PARIS</h1>
             <NavLink to='/vitrine'><Button  btnStyle="btn-primary" text="Dinez avec nous"/></NavLink> 
        </section>
       
    )
}
export default Home;
