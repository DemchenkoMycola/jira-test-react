import React from 'react';
import { Redirect } from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            user: localStorage.getItem('username'),
        }

        this.logout = this.logout.bind(this);
    }

    logout(){
        localStorage.removeItem('username');
        this.setState({
            user: ''
        })
    }


    render(){
        return(
            <header className="header">
                {
                this.state.user !== '' ? 
                <span>
                {this.state.user}
                <button onClick={this.logout}>logout</button>
                </span> :
                <Redirect to="/" />
                }

            </header>
        )
    }
}
export default Header;