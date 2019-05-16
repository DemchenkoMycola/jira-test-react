import React from 'react'
import IssuesList from '../components/issues/IssuesList'

 const Issues = (props) => {
        return(
            <div>
                <h1>Project id: {props.match.params.id}</h1>
                <section className="issues_form">
                    <legend>Add issue</legend>
                    <label>Title</label>
                    <input type="text" placeholder="title" />
                    <label>Description</label>
                    <input type="text" placeholder="description" />
                    <button>addç</button>
                </section>
                <section className="issues_list">
                <h2>Projects issues</h2>
                    <IssuesList />
                </section>
            </div>
        )
}

export default Issues;