import React from 'react';

function Signup() {
    return (
        <form className="w3-container w3-card-4">
            <h2 className="w3-text-blue">Signup</h2>     
            <label className="w3-text-blue"><b>Name</b></label>
            <input className="w3-input w3-border" name="name" type="text" />
            
            <label className="w3-text-blue"><b>Username</b></label>
            <input className="w3-input w3-border" name="username" type="text" />

            <label className="w3-text-blue"><b>Password</b></label>
            <input className="w3-input w3-border" name="password" type="text" />

            <button className="w3-btn w3-blue">Register</button>
        </form>
    )
}

export default Signup;