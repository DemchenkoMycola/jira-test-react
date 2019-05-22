import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            login_mode: true
        }
        this.handleLoginMode = this.handleLoginMode.bind(this);
        this.handleRegisterMode = this.handleRegisterMode.bind(this);
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
                    <Register />
                }
            </section>
        )
    }

}