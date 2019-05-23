import React from 'react';

const ProjectDetails = (props) => {
    
    const {title, description} = props.project

    return(
        <section className="project_details">
            <p>title: {title}</p>
            <p>description: {description}</p>
        </section>
    )
}

export default ProjectDetails;