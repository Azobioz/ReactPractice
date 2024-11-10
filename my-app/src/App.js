import React, {useState} from "react";
import Header from "./components/Header";
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=2"

const App =  () => {

    const [users, setUsers] = useState([
    ])

    axios.get(baseUrl).then((res) => {
        setUsers(res.data.data)
    })


    const deleteUser = (id) => {
        setUsers(users.filter((el) => el.id !== id))
    }

    const editUser = (user) => {
        let allUsers = [...users]
        allUsers[user.id - 1] = user
        setUsers(allUsers)
        console.log(allUsers)
    }

    const addUser = (user) => {
        const id = users.length + 1
        setUsers([...users, {id, ...user}])
    }

    return (<div>
        <Header title="List of users"/>
        <main>
            <Users onEdit={editUser} users={users} onDelete={deleteUser}/>
        </main>
        <aside>
            <AddUser onAdd={addUser}/>
        </aside>
    </div>)

}



export default App
