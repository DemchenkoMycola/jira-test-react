import React from 'react';
import { connect } from 'react-redux';
import UsersList from '../components/users/UsersList';
import { FaUserPlus } from 'react-icons/fa';
import { allowUser, disallowUser } from '../actions/projectsAction';

const ProjectDetails = (props) => {

    const project_id = props.match.params.id;
    const project = props.projects.find(project => project.id === project_id);

    // console.log(props)

    let {id, title, description, link, users} = project;

    const addUser = (userId) => {
        props.addUser(userId, id);
    }

    const deleteUser = (userId) => {
        props.deleteUser(userId, id);
    }

    return(
        <main className="project_details">
            <div className="project_info">
                <span>Project name:  {title}</span>
                <span>Project description: {description}</span>
                <a href={link}>{link}</a>
            </div>
            <div className="users_info">
                <h3 >Allowed users</h3>
                <UsersList  
                    deleteUser={deleteUser}                     
                    allowed={true}
                    usersAllowed={users} />
                <button className="icon_button">
                    <FaUserPlus className="allow_user" />
                </button>
                <UsersList 
                    addUser={addUser}
                    allowed={false} 
                    usersAllowed={users} />
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {projects: state.projects}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userId, projectId) => dispatch(allowUser(userId, projectId)),
        deleteUser: (userId, projectId) => dispatch(disallowUser(userId, projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);