import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import Allposts from '../components/Allposts';
import GalleryHeadline from '../components/GalleryHeadline';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Linkedinbutton from "../components/Linkedinbutton.js";
import BackgroundOverlay from '../components/FrontPageBackgroundOverlay';
import '../Styles/General.scss';
import '../Styles/Frontpage.scss';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';


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
            erfaring,
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
                        
                        <div className='frontpagecontent_wrapper'>
                        <h1><span className="color-pink">{content.titlePink}</span>{content.h1Title}</h1>
                        <p className="[ ingress ]">{content.ingress}</p>

                            <div className="[ button-wrapper ]">
                                <PrimaryButton />
                                <SecondaryButton
                                    secondaryButton={`Hva han rør`}
                                    link={`/hva-han-gjor`}
                                />
                            </div>

                        </div>

       
                       <BackgroundOverlay />
                        {content.bannerBilde?.asset && <img className="[ bannerimage ]" src={content.bannerBilde.asset.url} alt="Main image" />}
             
                        <svg className="[ roundedCorner ]" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                                <filter id="round">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                                </filter>
                            </defs>
                        </svg>




                        <div className='frontpagecontent_wrapper'>
                        <div className='frontpagecontent_wrapper_content'>
                            <h2>{content.h2Undertittel}</h2>
                            <h3>{content.h3Undertittel}</h3>
                
                <ul className="[ erfaringListe ]">
                {content.erfaring &&
                content.erfaring.map((erfaring, index) => (   
                <li key={index}><CheckCircleOutlined/>{erfaring}</li>       
                ))}
                </ul>
                       
                       

                        <div className="[ button-wrapper ]">
                        <SecondaryButton
                        secondaryButton={`Om han`}
                        link={`/om-han`}
                        />
                                <Linkedinbutton />
                        </div>

                        </div>
                        </div>


                    </div>
                    
                ))}

<GalleryHeadline />          
<Allposts 
  numberPosts={true}
  linkAllPosts={true}  
/>
</div>

) 

}