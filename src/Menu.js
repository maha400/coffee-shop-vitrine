import React from "react";
import './Vitrine.css';
import picList from "./pictures";
import { NavLink } from 'react-router-dom'

function Menu(){
    return(
    <ul className="menu-container">
        <ul className="menu-text">
        <li><h2>Les saveurs De France</h2></li>
        <li><p>Paris est un creuset comme notre nourriture peut 
            en témoigner. Goûtez et savoureux la vie délicieuse !</p></li>
        </ul>
        <ul>
            <li><NavLink to='/entrées'><img src={picList[2]} className='menu-img'></img></NavLink></li>
            <li className="tiny">Des entrées appétissantes</li>
        </ul>
        <ul>
            <li><NavLink to='/healthy'><img src={picList[4]} className='menu-img'></img></NavLink></li>
            <li className="tiny">Des plats sains</li>
        </ul>
        <ul>
            <li><NavLink to='/gateaux'><img src={picList[3]} className='menu-img'></img></NavLink></li>
            <li className="tiny">petites douceurs pour finir</li>
        </ul>
    </ul>
    )
}
export default Menu;