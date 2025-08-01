import { useContext, useState } from "react"
import UserContext from "../../context/userContext";


export const Login = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
 
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input 

                type="text" 
                placeholder="Password"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {" "}
            <input 
                type="text" 
                placeholder="Username"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}