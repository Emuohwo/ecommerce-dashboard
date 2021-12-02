import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch ,{ username, password });
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: '100vh'
            }}
        >
            <input
                style={{padding: 10, marginBottom: 20}} 
                type="text"
                placeholder="Username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                style={{padding: 10, marginBottom: 20}} 
                type="password"
            placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
