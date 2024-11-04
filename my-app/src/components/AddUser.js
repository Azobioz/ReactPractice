import React, {useState} from "react"
import addUser from "./Users"

const AddUser = ({ addUser }) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(1)
    const [hobby, setHobby] = useState("")


    const handleSubmit = () => {
        addUser({firstName: firstName, lastName: lastName, age: parseInt(age), hobby: hobby})

    }

    return (
        <form>
            <input placeholder="First Name"
                   onChange={(e) => setFirstName(e.target.value)}  />
            <input placeholder="Last Name"
                   onChange={(e) => setLastName(e.target.value)}/>
            <input placeholder="Age"
                   onChange={(e) => setAge(e.target.value)}/>
            <textarea placeholder="Hobby"
                      onChange={(e) => setHobby(e.target.value)}></textarea>
            <button type="button" onClick={handleSubmit}>Add User</button>
        </form>

    )

}

export default AddUser