import React from 'react';
import ProjectItem from './ProjectItem'
import { Link } from "react-router-dom";

export default class ProjectsList extends React.Component {
    render(){
        return (
            <div>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <Link to="/issues">isuues</Link>
            </div>
        )
    }
}