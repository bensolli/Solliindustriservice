import { Link } from "react-router-dom";
import '../Styles/Postcards.scss';

export default function Navbar() {

return (
    <div>
       
            <ul className="[ navigation-container ]">
                <Link to="/" className="[ navigation-container__nav-element ]"><li>Home</li></Link>
                <Link to="/About" className="[ navigation-container__nav-element ]"><li>Om Han</li></Link>
                <Link to="/Kontakt" className="[ navigation-container__nav-element ]"><li>Kontakt</li></Link>  
            </ul>
                    
    </div>
) 

}