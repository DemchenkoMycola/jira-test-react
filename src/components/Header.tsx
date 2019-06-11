import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

interface State {
    user: object | any
}

interface Props {
    user: object,
    logoutUser: () => void
}

class Header extends React.Component<Props, State>{

    constructor(props: any){
        super(props);

        this.state = {
            user: this.props.user
        }

        this.logout = this.logout.bind(this);
    }

    logout(){
        this.setState({
            user: null
        });
        this.props.logoutUser();
    }

    render(){
        return(
            <header className="header">
                {
                this.state.user ? 
                <div className="header_content">
                    <Link to={`/projects/${this.state.user.id}`}>Projects</Link>
                    <span>{this.state.user.name }
                        <button onClick={this.logout}>logout</button>
                    </span>
                    
                </div>
                :
                <Redirect to="/" />
                }
            </header>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);