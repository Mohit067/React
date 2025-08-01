import { useContext } from "react"
import UserContext from "../../context/userContext"

export const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) return <h2>Login Please</h2>
    return <div>Welcome {user.username}</div>
    
} 