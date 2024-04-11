import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import '../Styles/Postcards.scss';

export default function Allposts() {
const [allpostsData, setAllPosts] = useState(null);

useEffect(() => {
    sanityClient.fetch(
        `*[_type == "post"]{
            companyName,
            title,
            workTitle,
            slug,
            "firstChild": body[0].children[0] {
                text,
                _key
              },
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            logoImage{
              asset->{
                _id,
                url
              }
            }
        }`
    )
    .then((data) => setAllPosts(data))
    .catch(console.error);
}, []);

return (
    <div className="card-wrapper">
        

<div className="wrapper">
        <h2>20+ glade referanser - Se alle</h2>
        <div className="postCard">
            {allpostsData &&
                allpostsData.map((post, index) => (
                    
                    
                    <div key={index}>
                        <img className="[ reference-user-image ]" src={post.mainImage.asset.url} alt="Main image" />

                        {post.firstChild?.text && <p>{post.firstChild.text}</p>}
                        {post.logoImage?.asset && <img className="[ reference-logo-image ]" src={post.logoImage.asset.url} alt="Logo image" />}
                   
                        
                        <p><b>{post.title},</b><br />{post.workTitle} i {post.companyName}</p>
                    </div>
                    
                ))}
        </div>
        </div>
    </div>
) 

}