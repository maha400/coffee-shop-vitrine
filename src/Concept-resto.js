import React from "react";
import './Vitrine.css';
import picList from "./pictures";
import Button from "./Buttons";
function Concept(){
    return(
<div className="concept-container">
<div className="concept-pic">
    <img src={picList[0]} className='picture'></img>
    <img src={picList[1]} className='picture-1'></img>
    </div>
    <div className="concept-text">
        <h3>Une Aventure Françcaise</h3>
        <p>Le bistro La Fourchette est né de l'amour pour 
            tout ce qui concerne Paris. Notre fondatrice et cheffe Isabelle Corréa a passé 
            trois années incroyables dans la ville de l'amour, s'est formée sous la tutelle 
            des meilleurs chefs. Elle a ramené chez elle tout ce qu'elle a appris : 
            les saveurs, les sentiments, le café de style familial, pour que vous puissiez 
            également goûter les saveurs de Paris.</p>
            <a href="#footer"><Button  btnStyle="btn-outline" text="reservez vite"/></a>
    </div>
    
   
    
        
    
</div>
    )
}
export default Concept;
