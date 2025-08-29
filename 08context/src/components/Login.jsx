import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login()
{
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }

    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    return(
       <div>
        <h2>Login</h2>

        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"></input>

        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"></input>

        <button onClick={handleSubmit}>Submit</button>
       </div> 
    );
}

export default Login