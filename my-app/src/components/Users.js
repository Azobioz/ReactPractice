import React from "react"

const Users = () => {
    let users = [
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
    ]
    if (users.length > 0) {
        return (<div>
            {users.map((el) => (
                <div className="user" key={el.id}>
                    <h3>{el.firstname} {el.lastname}</h3>
                    <p>{el.hobby}</p>
                </div>
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
