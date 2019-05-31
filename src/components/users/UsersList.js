import React from 'react';
import { connect } from 'react-redux';
import { FaRegTrashAlt, FaPlusSquare } from 'react-icons/fa';


const UsersLst = (props) => {

    let {users, allowed, usersAllowed} = props

    if(allowed){
        users = users.filter(user => usersAllowed.findIndex(id => id === user.id) >= 0)
    }else{
        users = users.filter(user => usersAllowed.findIndex(id => id === user.id) < 0)
    }

    const addUser = (id) => {
        props.addUser(id)
    }

    const deleteUser = (id) => {
        props.deleteUser(id)
    }

    return (
        users.map((user) => {
            return (
                <div className="user_item" key={`${user.name}${user.id}`}>
                        <span>
                            {user.name}
                        </span>
                       { !allowed ?
                        <button 
                            onClick={() => addUser(user.id)}
                            className="icon_button add_user_button">
                            <FaPlusSquare />
                        </button>
                        :
                        <button 
                            onClick={() => deleteUser(user.id)}
                            className="icon_button del_button del_user_button">
                            <FaRegTrashAlt />
                        </button>
                       }
                </div>
            )
        })
    )
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersLst);