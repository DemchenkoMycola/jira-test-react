import React from 'react';
import { connect } from 'react-redux';
import { FaRegTrashAlt, FaPlusSquare } from 'react-icons/fa';


const UsersLst = (props: any) => {

    let {users, allowed, usersAllowed} = props

    if(allowed){
        users = users.filter((user: any) => usersAllowed.findIndex((id: string) => id === user.id) >= 0)
    }else{
        users = users.filter((user: any) => usersAllowed.findIndex((id: string) => id === user.id) < 0)
    }

    const addUser = (id: string) => {
        props.addUser(id)
    }

    const deleteUser = (id: string) => {
        props.deleteUser(id)
    }

    return (
        users.map((user: any) => {
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

const mapStateToProps = (state: any) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersLst);