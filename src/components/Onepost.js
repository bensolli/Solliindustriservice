import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function Onepost() {
    const [postData, setPostData] = useState(null); 
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author-> name,
                "authorImage": author->image
            }`,
            { slug }
        )
        .then((data) => setPostData(data[0]))
        .catch(console.error);
    }, [slug]);
if (!postData) return <div>Loading...</div>;
return (
    <div>
        <h2>{postData.title}</h2>
        <div>
            <img src={urlFor(postData.authorImage).width(100).url()} alt="Author is Benni" />
        </div>
    </div>
)
}