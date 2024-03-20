import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./css/LoginTrucker.css"; 

function LoginTrucker({ currentTrucker, setCurrentTrucker }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        const userInfo = { username, password };
        const res = await fetch('/api/login/trucker', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (res.ok) {
            const data = await res.json();
            setCurrentTrucker(data);
            navigate('/company');
        } else {
            alert('Invalid log in');
        }
    }

    function handleLogout() {
        setCurrentTrucker(null);
        fetch('/api/logout/trucker', { method: 'DELETE' });
    }

    return (
        <div className="container">
            <h1>Trucker Login</h1>
            {currentTrucker && <h2>Welcome {currentTrucker.username}!</h2>}
            <button onClick={handleLogout} className="button">Logout</button>
            <form onSubmit={handleLogin} className="form">
                <label className="label">
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                    />
                </label>
                <label className="label">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input"
                    />
                </label>
                <button type='submit' className="button">Log In</button>
            </form>
        </div>
    );
}

export default LoginTrucker;
