import {useState} from 'react'

function Profile() {

const [name, setName] = useState('')
    return (
        <div>
            <label>Name: {name}</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
    )
    
}

export default Profile