import { useState } from "react"


export default function Signup (){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();

        console.log(email,password)
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
            <button>Sign up</button>
        </form>
    )
}