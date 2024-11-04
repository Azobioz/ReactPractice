import React from "react";
import Header from "./components/Header";
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import addUser from "./components/AddUser";

const App =  () => {

    return (<div>
        <Header title="List of users"/>
        <main>
            <Users/>
        </main>
        <aside>
            <AddUser addUser={}/>
        </aside>
    </div>)

}



export default App