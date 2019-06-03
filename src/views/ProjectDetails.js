import React, { useState } from 'react';
import { connect } from 'react-redux';
import UsersList from '../components/users/UsersList';
import { FaUserPlus } from 'react-icons/fa';
import { allowUser, disallowUser } from '../actions/projectsAction';

const ProjectDetails = (props) => {

    const [state, setState] = useState({
        allowUsers: false
    })

    const project_id = props.match.params.id;
    const project = props.projects.find(project => project.id === project_id);

    let {id, title, description, link, users} = project;

    const addUser = (userId) => {
        props.addUser(userId, id);
    }

    const deleteUser = (userId) => {
        props.deleteUser(userId, id);
    }

    const allowUser = () => {
        setState({
            allowUsers: !state.allowUsers
        })
    }

    return(
        <main className="project_details">
            <section className="project_details_header">
                <button
                    onClick={() =>props.history.goBack()}
                >back</button>
            </section>
            <section className="details">
                <div className="project_info">
                    <p>Project name:  {title}</p>
                    <p>Project description: {description}</p>
                    <a href={link}>{link}</a>
                </div>
                <div className="users_details">
                    <h3 >Allowed users</h3>
                    <UsersList  
                        deleteUser={deleteUser}                     
                        allowed={true}
                        usersAllowed={users} />
                    <button 
                        onClick={allowUser}
                        className="icon_button">
                        <FaUserPlus className="allow_user" />
                    </button>
                    {
                    state.allowUsers ?
                        <UsersList 
                        addUser={addUser}
                        allowed={false} 
                        usersAllowed={users} />
                    : null
                    }
                </div>
            </section>
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