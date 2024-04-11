import { Link } from "react-router-dom";
import '../Styles/Navigation.scss';
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Navbar() {
const [logoData, setLogo] = useState(null);

useEffect(() => {
    sanityClient.fetch(
        `*[_type == "siteSettings"]{
              weblogo{
                asset->{
                    _id,
                    url
                }
            },
        }`
    )
    .then((data) => setLogo(data))
    .catch(console.error);
}, []);

return (
        

<div className="wrapper">

<div className="[ navigation-container ]">
            {logoData &&
                logoData.map((siteSettings, index) => (
                    
                    
                    <div className="navigation-container-logo" key={index}>
                    <Link to="/">
                       {siteSettings.weblogo?.asset && <img className="[ reference-user-image ]" src={siteSettings.weblogo.asset.url} alt="Main image" />}
                    </Link>
                    </div>
 
                ))}
                                    
                        <ul className="[ navigation-container-list ]">
                            <Link to="/" className="[ navigation-container__nav-element ]"><li>Home</li></Link>
                            <Link to="/About" className="[ navigation-container__nav-element ]"><li>Om Han</li></Link>
                            <Link to="/Kontakt" className="[ navigation-container__nav-element ]"><li>Kontakt</li></Link>  
                        </ul>
        </div>
        </div>

) 

}


