import React, {useState} from "react"

const AddUser = ({onAdd}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [hobby, setHobby] = useState("")


    const handleSubmit = () => {
        onAdd({firstname: firstName, lastname: lastName, age: Number(age), hobby: hobby })

        setFirstName("")
        setLastName("")
        setAge(0)
        setHobby("")

    }

    return (
        <form >
            <input
                id="id1"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                id="id2"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                id="id3"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <textarea
                id="id4"
                placeholder="Hobby"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
            />
            <button type="button" onClick={handleSubmit}>Add User</button>
        </form>
    )

}

export default AddUser