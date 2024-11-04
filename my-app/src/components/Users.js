import React, {useState} from "react"
import User from "./User"

const Users = () => {
    const [users, setUsers] = useState([
                {
                    id: 1,
                    firstname: 'Ben',
                    lastname: 'Benson',
                    age: 14,
                    hobby: 'video games'
                },
                {
                    id: 2,
                    firstname: 'Artem',
                    lastname: 'Bobov',
                    age: 18,
                    hobby: 'Digital art'
                }
    ])

    const addUser = (user) => {
        const id = users.length + 1
        setUsers([...users, {id, ...user}])
        console.log("addUser worked")
    }


    if (users.length > 0) {
        return (<div>
                {users.map((el) => (
                <User key={el.id} user={el}/>
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
