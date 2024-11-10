import React, {useState} from "react";
import { SlTrash, SlNote } from "react-icons/sl";
import AddUser from "./AddUser"

const User = ({onEditUser, onDeleteUser, user}) => {

    const [editForm, setEditForm] = useState(false)

    return (<div className="user" >
        <SlTrash onClick={() => onDeleteUser(user.id)} className="delete-icon"/>
        <SlNote onClick={() => {setEditForm(!editForm)}} className="edit-icon"/>
        <h3>{user.firstname} {user.lastname}</h3>
        <p>{user.hobby} {user.age} year old</p>
        {editForm && <AddUser user={user} onAdd={onEditUser}/>}
    </div>)


}

export default User