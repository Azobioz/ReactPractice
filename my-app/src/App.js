import React, {useState} from "react";
import Header from "./components/Header";
import Users from "./components/Users"
import AddUser from "./components/AddUser"


const App =  () => {

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
    }

    return (<div>
        <Header title="List of users"/>
        <main>
            <Users users={users}/>
        </main>
        <aside>
            <AddUser onAdd={addUser}/>
        </aside>
    </div>)

}



export default App