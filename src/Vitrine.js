import React from "react";
import Citations from "./citation";
import Concept from "./Concept-resto";
import Menu from "./Menu";
import Footer from "./Footer";
import './Vitrine.css';
function Vitrine(){
    return( 
        <div className='vitrine-container'>
        <Concept />
        <Citations />
        <Menu />
        <Footer/>
        </div>
       )
   
}
export default Vitrine;