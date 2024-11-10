import React, {useState} from "react"

const AddUser = ({user, onAdd}) => {

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")



    let myForm = null
    return (
        <form ref={(el) => myForm = el }>
            <input
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={() => {
                myForm.reset()
                const addUser = { first_name: first_name, last_name: last_name, email: email}
                if ({user}) {
                    addUser.id = user.id
                }
                onAdd(addUser)
                    }}>Add User</button>
        </form>
    )

}

export default AddUser