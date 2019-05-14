import React from 'react';

export default class ProjectItem extends React.Component{
    render(){
        return(
            <div className="project_item">
                <div>id</div>
                <div>Name</div>
                <button>details</button>
                <button>issuess</button>
            </div>
        )
    }
}