import React from 'react';

const ProjectDetails = (props) => {
    
    const {title, description, link} = props.project

    return(
        <section className="project_details">
            <p>title: {title}</p>
            <p>description: {description}</p>
            <a href={link}>{link}</a>
        </section>
    )
}

export default ProjectDetails;