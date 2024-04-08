import './Login.css'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext'

function Login() {
    const { setUser } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        if (username && email) {
            setUser({ username, email });
            window.location.href = "/";
        } else {
            alert("Please provide both username and email.");
        }
    }

    return (
        <main className="misc-login">
            <h1 className="secondary-font main-text-color">Prijavite se</h1>
            <br />
            <form className="login-form" onSubmit={loginUser}>
                <label htmlFor="ime">Korisničko ime:<br />
                    <input
                        type="text"
                        name="ime"
                        id="ime"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br /><br />
                <label htmlFor="email">E-mail: <br />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br /><br />
                {/* <label htmlFor="lozinka">Lozinka: <br />
                    <input type="password" name="lozinka" id="lozinka" required />
                </label>
                <br /><br /> */}
                <button type="submit">Prijavi se!</button> <button type="reset">Izbriši</button>
            </form>
        </main>
    );
}

export { Login };
