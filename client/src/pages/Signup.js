import { useState } from "react"
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"

export default function Signup (){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault();

       await signup(email,password)
    }
    
    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
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
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
            <div className="signup-login-reminder">
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </form>
    )
}