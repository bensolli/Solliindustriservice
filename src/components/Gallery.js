import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import '../Styles/Projects.scss';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

export default () => {
    const [allprojectData, setAllProjects] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        sanityClient.fetch(
          `*[_type == "gallery"]{
              title,
              companytitle,
              mainImage{
                  asset->{
                      _id,
                      url
                  }
              },
              dateRange,
              body,
          }`
        )
        .then((data) => {
          // Convert dates to text format
          const projectsWithFormattedDates = data.map(project => ({
            ...project,
            dateRange: {
              from: new Date(project.dateRange.from).toLocaleDateString('nb-NO', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }),
              to: new Date(project.dateRange.to).toLocaleDateString('nb-NO', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            }
          }));
          setAllProjects(projectsWithFormattedDates);
        })
        .catch(console.error);
      }, []);
      

    useEffect(() => {
        if (allprojectData) {
            const pathname = window.location.pathname;
            const formattedProjectTitle = pathname.split('/').pop().replace(/-/g, ' ');

            const foundIndex = allprojectData.findIndex(project => project.companytitle === formattedProjectTitle);

            if (foundIndex !== -1) {
                setPage(foundIndex);
            } else {
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
        <div className="wrapper" id="prosjekter">
            {allprojectData.map((project, index) => (
                <div key={index} style={{ display: index === page ? 'block' : 'none' }} >
                    <div className="[ project-wrapper ]">
                        <div className="[ project-wrapper-left ]">
                            {project.mainImage?.asset && <img src={project.mainImage.asset.url} alt="Logo image" />}
                        

                    
                        </div>
                        <div className="[ project-wrapper-right ]">
                            <div className="[ project-wrapper-right-content ]">
                            <p>{project.dateRange.from} - {project.dateRange.to}</p>
                            <h2>{project.companytitle}</h2>
                            <p>{project.body}</p>
                            <div className="[ project-wrapper-left-title-navigation ]">
                                    <NavigateBeforeRoundedIcon onClick={previousSlide}/>
                                    <NavigateNextRoundedIcon onClick={nextSlide}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
