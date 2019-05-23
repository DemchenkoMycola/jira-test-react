import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(e){
        this.setState({
            username: e.target.value
        })
    }

    handleEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    handlePassword(e){
        e.preventDefault();

        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addUser(this.state)
    }

    render(){
        return(
            <section className="register_form">
                <legend>Register</legend>
                <label>Username</label>
                <input 
                    onChange={this.handleName} 
                    type="text" name="username"
                    placeholder="username" />
                <label>Email</label>
                <input 
                    onChange={this.handleEmail}
                    type="email" 
                    name="email" 
                    placeholder="email" />
                <label>Password</label>
                <input 
                    onChange={this.handlePassword}
                    type="password" 
                    name="passowrd" 
                    placeholder="password"/>
                <button onClick={this.handleSubmit}>register</button>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: user => dispatch(addUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register);