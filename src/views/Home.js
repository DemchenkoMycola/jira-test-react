import React from 'react';
import { Redirect } from 'react-router-dom'

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            login: false,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleLogin(){
    
            this.setState({
                login: true
            })
    }

    handleName(event){
        this.setState({
            name: event.target.value
        })
    }

    handlePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    render(){
        if(this.state.login){
            return <Redirect to="/projects" />
        }
        return(
            <div>
                <h1>Wellcome to Jira test App</h1>
                <section className="login_form">
                    <legend>Login</legend>
                    <div className="errors">{this.state.errors}</div>
                    <label>Name</label>
                    <input 
                        type="text" 
                        placeholder="name"
                        onChange={this.handleName}
                        value={this.state.name}
                        />
                    <label>Password</label>                    
                    <input 
                        type="password" 
                        placeholder="password" 
                        onChange={this.handlePassword}
                        value={this.state.password}
                        />
                    <button 
                    className="button" 
                    type="submit"
                    disabled={!this.state.name && !this.state.password}
                    onClick={this.handleLogin}
                    >Login</button>
                </section>
            </div>
        )
    }
}