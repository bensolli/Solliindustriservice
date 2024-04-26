import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Navigation.scss';
import sanityClient from "../client.js";

export default function Linkedin() {
  const [linkedinData, setLinkedin] = useState(null);

  useEffect(() => {
    if (!linkedinData) {
      sanityClient.fetch(
        `*[_type == "siteSettings"]{
            linkedin,
        }` // Corrected the index to retrieve the first item
      )
      .then((data) => setLinkedin(data[1])) // Set the first item as linkedinData
      .catch(console.error);
    }
  }, [linkedinData]);

  console.log(linkedinData);

  return (
    <>
      {linkedinData && (
       
          <Link to={linkedinData.linkedin} className="[ button-linkedin ]">
            <span>Følg han på Linkedin</span>
          </Link>
        
      )}
    </>
  );
}

