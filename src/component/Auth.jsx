import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
    const navigate = useNavigate()
    const moveUsers = (number)=>{
        if( number >= 4){
            navigate("/users")
        } else {
            alert('xato')
        }
    }
return (
    <div>
        <button onClick={()=>moveUsers(4)}>User panelga o'tish</button>
    </div>
)
}
