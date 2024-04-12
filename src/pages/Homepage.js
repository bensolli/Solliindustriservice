import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import Allposts from '../components/Allposts';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import '../Styles/General.scss';
import '../Styles/Frontpage.scss';


export default function Homepage() {
const [allFrontpageData, setAllFrontpage] = useState(null);

useEffect(() => {
    sanityClient.fetch(
        `*[_type == "frontPage"]{
            h1Title,
            titlePink,
            ingress,
              bannerBilde{
                asset->{
                    _id,
                    url
                }
            },
            h2Undertittel,
            h3Undertittel,
        }`
    )
    .then((data) => setAllFrontpage(data))
    .catch(console.error);
}, []);

return (
<div className="[ frontpage-container ]">

            {allFrontpageData &&
                allFrontpageData.map((content, index) => (
                    
                    
                    <div key={index}>
                        
                        <div className='wrapper'>
                        <h1><span className="color-pink">{content.titlePink}</span>{content.h1Title}</h1>
                        <p>{content.ingress}</p>
                        <PrimaryButton />
                        </div>

                        <div className="[ wrapper-bannerimage ]">
                         
                        {content.bannerBilde?.asset && <img className="[ bannerimage ]" src={content.bannerBilde.asset.url} alt="Main image" />}
                        

                        </div>
                        <div className='wrapper'>
                        <h2>{content.h2Undertittel}</h2>
                        <h3>{content.h3Undertittel}</h3>
                        <SecondaryButton />
                        </div>


                    </div>
                    
                ))}
             
<Allposts />
</div>

) 

}