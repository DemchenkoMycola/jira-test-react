import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userActions';

// interface User {
//     name: string,
//     password: string
// }

interface Props{
    users: object[],
    loginUser: (user: any) => void
}

interface State {
    name: string,
    password: string,
    user: any,
    errors: string,
    login: boolean
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

class Login extends React.Component<Props, State>{
    constructor(props: any){
        super(props);
        this.state = {
            name: '',
            password: '',
            user: {
                name: '',
                password: ''
            },
            errors: '',
            login: false,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUser = this.handleUser.bind(this);
    }

    handleUser(name: string){
        let  users  = this.props.users;
        let user = users.find((user: any) => 
            user.name === name || user.email === name
        )
        
        if(user){
            this.setState({
                user: user
            })
        }

    }

    handleLogin(){

            if(this.state.user.password === this.state.password){ 
                this.props.loginUser(this.state.user);
                this.setState({
                    login: true
                })
            }else{
                this.setState({
                    errors: "incorect username or password"
                })
            }
    }

    handleName(event: InputEvent){
        let name = event.target.value
        this.setState({
            name: name
        })
        this.handleUser(name);
    }

    handlePassword(event: InputEvent){
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
                        className="input"
                        type="text" 
                        placeholder="name"
                        onChange={this.handleName}
                        value={this.state.name}
                        />
                    <label>Password</label>                    
                    <input 
                        className="input"
                        type="password" 
                        placeholder="password" 
                        onChange={this.handlePassword}
                        value={this.state.password}
                        />
                    <button 
                    className="button login_button" 
                    type="submit"
                    disabled={!this.state.name && !this.state.password}
                    onClick={this.handleLogin}
                    >Login</button>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: (user: any)  => dispatch(loginUser(user))
    }
}

const mapStateToProps = (state: any) => {
    return{
        users: state.users,
        user: state.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);