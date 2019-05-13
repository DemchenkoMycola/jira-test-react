import React from 'react';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <legend>Login</legend>
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}