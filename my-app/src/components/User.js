import React, {useState} from "react";
import { SlTrash, SlNote } from "react-icons/sl";

const User = ({user}) => {

    return (<div className="user" >
        <SlTrash className="delete-icon"/>
        <SlNote className="edit-icon"/>
        <h3>{user.firstname} {user.lastname}</h3>
        <p>{user.hobby} {user.age} year old</p>
    </div>)

}

export default User