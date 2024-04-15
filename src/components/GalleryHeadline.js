import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import '../Styles/Projects.scss';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import SecondaryButton from '../components/SecondaryButton';

export default () => {
    const [allprojectData, setAllProjects] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "gallery"]{
                companytitle,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
            }`
        )
        .then((data) => setAllProjects(data))
        .catch(console.error);
    }, []);

    const nextSlide = () => {
        setPage((page + 1) % (allprojectData.length || 1));
    };

    const previousSlide = () => {
        setPage((page - 1 + allprojectData.length) % (allprojectData.length || 1));
    };

    if (!allprojectData) {
        return <div>Loading...</div>;
    }

    return (

            <div className="wrapper">
                
                    {allprojectData.map((project, index) => (
                        <div key={index} style={{ display: index === page ? 'block' : 'none' }} >
                        <div className="[ project-wrapper ]">
                        <div className="[ project-wrapper-left ]">
                            
                            {project.mainImage?.asset && <img src={project.mainImage.asset.url} alt="Logo image" />}
                            
                            <div className="project-wrapper-left-title">
                            
                            <div className="[ project-wrapper-left-title-name ]">
                            <p>{project.companytitle}</p>
                            </div>
                            <div className="[ project-wrapper-left-title-navigation ]">
                            <NavigateBeforeRoundedIcon onClick={previousSlide}/>
                            <NavigateNextRoundedIcon onClick={nextSlide}/>
                            </div>

                            </div>
                        </div>
                        <div className="[ project-wrapper-right ]">
                            <h2>Over et tiår med suksé historier</h2>
                            <SecondaryButton />
                        </div>
                        </div>
                        </div>
                    ))}

                
            </div>
   
    );
};