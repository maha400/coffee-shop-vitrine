import React from "react";
import './Vitrine.css';
import picList from "./pictures";

function Citations(){
    return(
        <div className="citations-container">
            <div className="citation-text">
                <h1>Témoignages d'amour pour La Fourchette</h1>
            </div>
            <div className="citations-list">
            <ul>
                <li><i class="fa-solid fa-quote-right"></i></li>
                <li>Une bouchée et j'ai eu l'impression
                     d'être de retour en France. La cheffe Isabelle et
                      son équipe se sont surpassés!.</li>
                <li><h5>Teddy, entrepreneur</h5></li>
            </ul>
            <ul>
                <li><i class="fa-solid fa-quote-right"></i></li>
                <li>L'ambiance était géniale et la nourriture est encore meilleure! 
                    Des recettes simples, bien faites, avec des ingrédients 
                    de première qualité. Je reviendrai.</li>
                <li><h5>Danielle, maman</h5></li>
            </ul>
            <ul>
                <li><i class="fa-solid fa-quote-right"></i></li>
                <li>Manger ici m'a rendue nostalgique de Paris. Quel plaisir!
                     Je vais organiser les réunions avec mes clients ici. </li>
                <li><h5>Carole, entrepreneuse</h5></li>
            </ul>
            </div>
        </div>
    )
}
export default Citations;