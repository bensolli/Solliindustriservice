import React from 'react';
import Gallery from '../components/Gallery';
import Allposts from '../components/Allposts';



export default function Omoss() {
    return (
        <div>
        <h1>Han gjør masse rart</h1>

       
        <Gallery /> 
        <Allposts 
            numberPosts={false}  
            linkAllPosts={false} 
        />
        </div>
    );
}