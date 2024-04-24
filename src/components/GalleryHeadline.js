import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import '../Styles/Projects.scss';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import SecondaryButton from '../components/SecondaryButton';

export default () => {
    const [allprojectData, setAllProjects] = useState(null);
    const [page, setPage] = useState(0);
    const [formattedCompanyTitles, setFormattedCompanyTitles] = useState([]);



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


    useEffect(() => {
        if (allprojectData) {
            const formattedProjectTitles = allprojectData.map(project => project.companytitle.replace(/\s+/g, '-'));
            setFormattedCompanyTitles(formattedProjectTitles);
            console.log(formattedCompanyTitles);

            if (allprojectData) {
                setPage(Math.floor(Math.random() * allprojectData.length));
            }
        }
    }, [allprojectData]);

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
                            <Link to={`/hva-han-gjor/#prosjekter/${formattedCompanyTitles[page]}`} className="[ project-wrapper-left-link ]"></Link>
                            {project.mainImage?.asset && <img src={project.mainImage.asset.url} alt="Logo image" />}
                            <div className="project-wrapper-left-title">
                                <div className="[ project-wrapper-left-title-name ]">
                                    <p>{index + 1}/{allprojectData.length}  {project.companytitle} <span className="lesMere"> - Les mere</span></p>
                                </div>
                                <div className="[ project-wrapper-left-title-navigation ]">
                                    <NavigateBeforeRoundedIcon onClick={previousSlide}/>
                                    <NavigateNextRoundedIcon onClick={nextSlide}/>
                                </div>
                            </div>
                        </div>
                        <div className="[ project-wrapper-right ]">
                            <div className="[ project-wrapper-right-content ]">
                                <h2>Over et tiår med suksé historier</h2>
                                <SecondaryButton
                                    secondaryButton={`Hva han rør`}
                                    link={`/hva-han-gjor/#prosjekter`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
