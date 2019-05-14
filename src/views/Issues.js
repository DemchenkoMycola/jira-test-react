import React from 'react'

export default class Issues extends React.Component{
    render(){
        return(
            <div>
                <section className="issues_form">
                    <legend>Add issue</legend>
                    <label>Title</label>
                    <input type="text" placeholder="title" />
                    <label>Description</label>
                    <input type="text" placeholder="description" />
                    <button>add</button>
                </section>
                <section className="issues_list">
                <h2>Projects issues</h2>
                <ul>
                    <li>issue 1</li>
                    <li>issue 2</li>
                    <li>issue 3</li>
                    <li>issue 4</li>
                    <li>issue 5</li>
                </ul>
                </section>
            </div>
        )
    }
}