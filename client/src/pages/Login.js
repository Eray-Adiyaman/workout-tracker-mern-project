import { useState } from "react"
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function Login (){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { login,error,isLoading } = useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        await login(email,password);
    }
    
    return(
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Email</label>
            <input
                type="email"
                autoComplete="off"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
            <div className="signup-login-reminder">
                <Link to="/signup">Don't have an account? Sign up </Link>
            </div>
        </form>
    )
}