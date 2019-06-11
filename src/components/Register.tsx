import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

interface User {
    name: string,
    email: string,
    password: string
}

interface Props {
    users: object[],
    addUser: (user: any) => void,
    handleLogin: () => void
}

interface State {
    errors: string,
    user: User,
    messages: string
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

class Register extends React.Component<Props, State>{

    constructor(props: any){
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
            },
            errors: '',
            messages: ''
        }

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(e: InputEvent){        
        let username = e.target.value
        if(this.props.users.find((user: any) => user.name === username)){
            this.setState({
                errors: `Username exist ${this.state.errors}`,
                user: {...this.state.user, name: username},
            })
        }else{
            this.setState({
                user: {...this.state.user, name: username},
                errors: ''
            })
        }
    }

    handleEmail(e: InputEvent){

        let email = e.target.value;

        if(this.props.users.find((user: any) => user.email === email)){
            this.setState({
                errors: `Chose another email ${this.state.errors}`,
                user: {...this.state.user, email: e.target.value}
            })
        }else{
            this.setState({
                user: {...this.state.user, email: e.target.value},
                errors: ''
            })
        }

    }

    handlePassword(e: InputEvent){
        e.preventDefault();
        this.setState({
            user: {...this.state.user, password: e.target.value}
        })
    }

    handleSubmit(e: ButtonEvent){
        if(this.state.errors !== ''){
            this.setState({
                errors: `Please fix errors  \n ${this.state.errors}` 
            })
        }else{
            e.preventDefault();
            this.props.addUser(this.state.user);
            this.setState({
                errors: '',
                messages: 'Thanks for register',
                user: {
                    name: '',
                    email: '',
                    password: '',
                }
            });
            this.props.handleLogin();
        }
    }

    render(){
        return(
            <section className="register_form">
                <legend>Register</legend>
                <span className="errors">{this.state.errors}</span>
                <span className="messages">{this.state.messages}</span>
                <label>Username</label>
                <input 
                    className="input"
                    onChange={this.handleName} 
                    type="text" 
                    name="username"
                    value={this.state.user.name}
                    placeholder="username" />
                <label>Email</label>
                <input 
                    className="input"                    
                    onChange={this.handleEmail}
                    type="email" 
                    name="email"
                    value={this.state.user.email}
                    placeholder="email" />
                <label>Password</label>
                <input 
                    className="input"            
                    onChange={this.handlePassword}
                    type="password" 
                    name="passowrd" 
                    value={this.state.user.password}
                    placeholder="password"/>
                <button 
                className="button register_button"
                disabled={this.state.user.name === ''}
                onClick={this.handleSubmit}>register</button>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addUser: (user: User) => dispatch(addUser(user))
    }
}

const mapStateToProps = (state: any) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);