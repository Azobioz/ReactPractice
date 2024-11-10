import React, {useState} from "react"

const AddUser = ({user, onAdd}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [hobby, setHobby] = useState("")




    let myForm = null
    return (
        <form ref={(el) => myForm = el }>
            <input
                id="id1"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                id="id2"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                id="id3"
                placeholder="Age"
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <textarea
                id="id4"
                placeholder="Hobby"
                onChange={(e) => setHobby(e.target.value)}
            />
            <button type="button" onClick={() => {
                myForm.reset()
                const addUser = { firstName: firstName, lastname: lastName, age: Number(age), hobby: hobby }
                if ({user}) {
                    addUser.id = user.id
                }
                onAdd(addUser)
                    }}>Add User</button>
        </form>
    )

}

export default AddUser