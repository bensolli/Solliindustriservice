import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import '../Styles/Postcards.scss';

export default function Allposts() {
const [allpostsData, setAllPosts] = useState(null);

useEffect(() => {
    sanityClient.fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
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
    <div>
        <h1><span class="color-pink">Industri</span>mekaniker med øye for rør</h1>
        <div class="postCard">
            {allpostsData &&
                allpostsData.map((post, index) => (
                    <Link to={'/' + post.slug.current} key={post.slug.current}>
                    <span key={index}>
                        <img 
                            src={post.mainImage.asset.url}
                            alt="Main image" 
                            />
                        <span>
                            <h2>{post.title}</h2>
                        </span>
                    </span>
                    </Link>
                ))}
        </div>
    </div>
) 

}