import React, { useState } from 'react';
import { connect } from 'react-redux';
import UsersList from '../components/users/UsersList';
import { FaUserPlus } from 'react-icons/fa';
import { allowUser, disallowUser } from '../actions/projectsAction';
import Header from '../components/Header';

interface Project {
    id: string,
}

interface Props{
    match: any,
    projects: any,
    addUser: (userId: string, id: string) => void,
    deleteUser: (userId: string, id: string) => void
}

const ProjectDetails = (props: Props) => {

    const [state, setState] = useState({
        allowUsers: false
    })

    const project_id = props.match.params.id;
    const project = props.projects.find((project: Project) => project.id === project_id);

    let {id, title, description, link, users} = project;

    const addUser = (userId: string) => {
        props.addUser(userId, id);
    }

    const deleteUser = (userId: string) => {
        props.deleteUser(userId, id);
    }

    const allowUser = () => {
        setState({
            allowUsers: !state.allowUsers
        })
    }

    return(
        <div>
        <Header />
        <main className="project_details">
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
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {projects: state.projects}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addUser: (userId: string, projectId: string) => dispatch(allowUser(userId, projectId)),
        deleteUser: (userId: string, projectId: string) => dispatch(disallowUser(userId, projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);