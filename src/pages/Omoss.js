import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import PortableText from '@sanity/block-content-to-react';
import PrimaryButton from '../components/PrimaryButton';
import '../Styles/General.scss';

export default function Omoss() {
  const [allFrontpageData, setAllFrontpage] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "about"]{
        h1Title,
        ingress,
        bannerBilde{
          asset->{
            _id,
            url
          }
        },
        body,
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
              {content.bannerBilde?.asset && <img className="[ bannerimage ]" src={content.bannerBilde.asset.url} alt="Main image" />}
              <h1>{content.h1Title}</h1>
              <p className="[ ingress ]">{content.ingress}</p>
              <PortableText blocks={content.body} /> {/* Render body content */}
              <PrimaryButton />
            </div>
          </div>
        ))}
    </div>
  );
}
