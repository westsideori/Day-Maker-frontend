import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ setCurrentUser }) {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleLogin(e) {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.errors) {
                    // set errors to show errors in the form
                    setErrors(data.errors);
                } else {
                    // use the response to set state
                    const { user, token } = data;
                    localStorage.setItem("token", token);
                    setCurrentUser(user);
                    history.push("/days");
                }
            });
    }


    return (
        <div className="w3-container" style={{ width: '50%' }}>
            <form className="w3-container w3-card-4" onSubmit={handleLogin}>
                <h2 className="w3-text-blue">Login</h2>
                <label className="w3-text-blue"><b>Username</b></label>
                <input className="w3-input w3-border" name="username" type="text" value={formData.username} onChange={handleChange} />

                <label className="w3-text-blue"><b>Password</b></label>
                <input className="w3-input w3-border" name="password" type="text" value={formData.password} onChange={handleChange} />
                {errors.map((error) => {
                    return <p key={error}>{error}</p>;
                })}
                <input className="w3-btn w3-blue" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;