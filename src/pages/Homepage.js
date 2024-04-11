import React from 'react';
import Allposts from '../components/Allposts';
import '../Styles/General.scss';


export default function Homepage() {
    return (
        <div>
        <div className='wrapper'>
        <b>Senior</b>
        <h1><span className="color-pink">Industri</span>mekaniker med øye for rør</h1>
        <p>Med 40+ års erfaring</p>
        </div>
        <Allposts />
        </div>
    );
}