import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import data from '../data.json';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            login_mode: true
        }
        this.handleLoginMode = this.handleLoginMode.bind(this);
        this.handleRegisterMode = this.handleRegisterMode.bind(this);
    }

    componentDidMount(){
        const { users, projects, issues } = data;

        if(!localStorage.getItem('users')){
            localStorage.setItem("users", JSON.stringify(users));            
        }
        
        if(!localStorage.getItem('projects')){
            localStorage.setItem("projects", JSON.stringify(projects));
        }

        if(!localStorage.getItem('issues')){
            localStorage.setItem("issues", JSON.stringify(issues));
        }
    }

    handleLoginMode(){
        this.setState({
            login_mode: true
        })
    }

    handleRegisterMode(){
        this.setState({
            login_mode: false
        })
    }

    render(){
        return(
            <section className="auth_section">
                <nav>
                    <ul className="auth_nav">
                        <li 
                            onClick={this.handleLoginMode} 
                            className={`auth_item ${this.state.login_mode ? '' : 'active'}`}>Login</li>
                        <li 
                            onClick={this.handleRegisterMode}
                            className={`auth_item ${this.state.login_mode ? 'active' : ''}`}>Register</li>
                    </ul>
                </nav>
                {
                    this.state.login_mode ?
                    <Login /> :
                    <Register handleLogin={this.handleLoginMode} />
                }
            </section>
        )
    }

}