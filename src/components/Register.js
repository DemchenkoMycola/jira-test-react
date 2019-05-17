import React from 'react';

class Register extends React.Component{
    render(){
        return(
            <section className="register_form">
                <legend>Register</legend>
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password"/>
                <button>register</button>
            </section>
        )
    }
}

export default Register;