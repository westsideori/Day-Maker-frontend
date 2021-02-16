import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'


function Nav({ currentUser, setCurrentUser }) {

    const history = useHistory()

    function logout() {
        // remove the token
        localStorage.removeItem("token");
        // clear currentUser
        setCurrentUser(null)
        history.push('/')

    }


    return (
        <nav className="w3-bar w3-blue">
            <NavLink className="w3-bar-item w3-button" exact to="/">Home</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/attractions">Attractions</NavLink>
            <NavLink className="w3-bar-item w3-button" to="/restaurants">Restaurants</NavLink>
            {currentUser ? (
                <>
                    <>
                        <NavLink className="w3-bar-item w3-button" to="/days">{currentUser.username}'s Days</NavLink>
                        <NavLink className="w3-bar-item w3-button" to="/new_day">New Day</NavLink>
                    </>
                    <>
                        <NavLink  className="w3-bar-item w3-button w3-right" onClick={logout} to="/">Logout</NavLink>
                    </>
                </>
            ) : (
                    <>
                        <NavLink className="w3-bar-item w3-button w3-right" to="/login">Log In</NavLink>
                        <NavLink className="w3-bar-item w3-button w3-right" to="/signup">Sign Up</NavLink>
                    </>
                )}
        </nav>
    )
}

export default Nav;

