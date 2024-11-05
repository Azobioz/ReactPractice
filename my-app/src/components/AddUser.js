import React, {useState} from "react"

const AddUser = ({onAdd}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(1)
    const [hobby, setHobby] = useState("")


    const handleSubmit = () => {
        onAdd({firstname: firstName, lastname: lastName, age: Number(age), hobby: hobby })

    }

    return (
        <form >
            <input
                placeholder="First Name"
                   onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                placeholder="Age"
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <textarea
                placeholder="Hobby"
                onChange={(e) => setHobby(e.target.value)}
            ></textarea>
            <button type="button" onClick={handleSubmit}>Add User</button>
        </form>


    )

}

export default AddUser