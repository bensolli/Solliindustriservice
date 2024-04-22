import { Link } from "react-router-dom";
import '../Styles/Navigation.scss';
import React from "react";

export default function SecondaryButton() {

    return (
        
        <Link to="/om-han" className="[ button-secondary ]"><span>Om han</span></Link>
        
        ) 
    
}