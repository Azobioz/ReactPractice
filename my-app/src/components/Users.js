import React from "react"
import User from "./User"


const Users = ({onEdit, users, onDelete}) => {

    if (users.length > 0) {
        return (<div>
                {users.map((el) => (
                <User onEditUser={onEdit} onDeleteUser={onDelete} key={el.id} user={el}/>
            ))}
        </div>)
    }
    else {
        return (<div className='user'>
            <h3>No users</h3>
        </div>)
    }




}

export default Users
