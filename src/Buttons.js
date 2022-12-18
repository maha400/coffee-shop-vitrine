import React from "react";
import './Button.css'
import {Link } from 'react-router-dom';
const STYLES=['btn-primary', 'btn-outline'];

const Button=({btnStyle ,text})=>{
 
    const CheckButtonStyle=STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

    return(
        
        <button className={CheckButtonStyle}>{text}</button>
        
    )
}
export default Button;