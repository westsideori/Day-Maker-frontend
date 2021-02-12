import React from 'react';

function Login() {
    return (
        <div className="w3-container" style={{width: '50%'}}>
            <form className="w3-container w3-card-4">
                <h2 className="w3-text-blue">Login</h2>     
                <label className="w3-text-blue"><b>Username</b></label>
                <input className="w3-input w3-border" name="Username" type="text" />

                <label className="w3-text-blue"><b>Password</b></label>
                <input className="w3-input w3-border" name="password" type="text" />

                <button className="w3-btn w3-blue">Login</button>
            </form>
        </div>
    )
}

export default Login;