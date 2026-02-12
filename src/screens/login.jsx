import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email:", email);
        axios({
            method: 'post',
            url: 'http://localhost:3000/auth/login',
            data: { email, password }
        }).then(res => {
            console.log('Login successful:', res.data);
            localStorage.setItem('token', res.data.token);
            navigate('/app');
        }).catch(err => {console.error('Login failed:', err)}); 


    }

    const handleClear = () => {
        setemail("");
        setPassword("");
    }


    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email:</label>
                <input value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="text" id="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" id="password" name="password" />
                <button type="submit">Login</button>
                <button type="button" onClick={handleClear}>Clear formulaire</button>
            </form>
        </div>
    )

}

export default Login;