import { Link } from "react-router-dom";
import '../Styles/Navigation.scss';
import React from "react";

export default ({secondaryButton, link}) => {

    return (
        <>
        <Link to={link} className="[ button-secondary ]"><span>{secondaryButton}</span></Link>
        </>
        ) 
    
}