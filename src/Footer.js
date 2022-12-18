import React from "react";
import './Footer.css';
import picList from "./pictures";
function Footer(){
    return(
       
                <ul className="footer-container" id="footer">
                    <li><img src={picList[5]} className="footer-img"></img></li>
                    <ul className="infos">
                        
                            <li><h2>À bientôt!</h2></li>
                            <li><h4>Numéro de téléphone</h4></li>
                            <li>01 23 45 67 89</li>
                            <li><h4>Adresse e-mail</h4></li>
                            <li>bonjour@sitevraimentsuper.fr</li>
                            <li><h4>restaurant</h4></li>
                            <li>12 rue Desaix, 97200 Fort de France</li>

                    </ul>
                </ul>
    );
}
export default Footer;