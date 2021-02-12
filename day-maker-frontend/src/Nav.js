import { NavLink } from 'react-router-dom';


function Nav() {
    return (
        <nav className="w3-bar w3-blue">
            <NavLink className="w3-bar-item w3-button" exact to="/">Home</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/attractions">Attractions</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/restaurants">Restaurants</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/days">Your Days</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/new_day">New Day</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/login">Log In</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/signup">Sign Up</NavLink>
        </nav>
    )
}

export default Nav;

