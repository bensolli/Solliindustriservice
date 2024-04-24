import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import '../Styles/Postcards.scss';

export default function Allposts({numberPosts, linkAllPosts}) {
const [allpostsData, setAllPosts] = useState(null);

useEffect(() => {
    sanityClient.fetch(
        `*[_type == "post"]{
            companyName,
            title,
            workTitle,
            slug,
            body,
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
    .then((data) => {
        if (numberPosts && data) {
            setAllPosts(data.slice(0, 3));
        } else {
            setAllPosts(data);
        }
    })
    .catch(console.error);
}, [numberPosts]);


console.log(allpostsData);

return (
    <div className="card-wrapper" id="referanser">
        

<div className="wrapper">
        <h2>20+ glade referanser

        {linkAllPosts ? (
             <Link to={`/hva-han-gjor/#referanser`}>Se alle</Link>
        ) : null}

        </h2>

        <div className="postCard">
            {allpostsData &&
                allpostsData.map((post, index) => (
                    
                    
                    <div key={index}>
                        <img className="[ reference-user-image ]" src={post.mainImage.asset.url} alt="Main image" />

                        <p>{post.body}</p>
                        {post.logoImage?.asset && <img className="[ reference-logo-image ]" src={post.logoImage.asset.url} alt="Logo image" />}
                   
                        
                        <p><b>{post.title},</b><br />{post.workTitle} i {post.companyName}</p>
                    </div>
                    
                ))}
        </div>
        </div>
    </div>
) 

}