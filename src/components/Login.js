import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            login: false,
            user: {},
            errors: '',
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUser = this.handleUser.bind(this);
    }

    handleUser(name){
        let  users  = this.props.users;
        let user = users.find((user) => 
            user.name === name || user.email === name
        )
        
        if(user){
            // console.log(user)
            this.setState({
                user: user
            })
        }

    }

    handleLogin(){

            if(this.state.user.password === this.state.password){
                this.setState({
                    login: true
                })
            }else{
                this.setState({
                    errors: "incorect username or password"
                })
            }
    }

    handleName(event){
        let name = event.target.value
        this.setState({
            name: name
        })
        this.handleUser(name);
    }

    handlePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    render(){
        if(this.state.login){
            return <Redirect to={`/projects/${this.state.user.id}`} />
        }
        return(
            <div>
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

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}


export default connect(mapStateToProps)(Login);