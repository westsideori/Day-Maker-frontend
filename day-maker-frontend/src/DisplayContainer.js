import {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom';
import RestaurantsList from "./RestaurantsList";
import AttractionList from "./AttractionList";
import DaysList from "./DaysList";
import NewDay from "./NewDay"
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';




function DisplayContainer() {

const [restaurants, setRestaurants] = useState([])
const [attractions, setAttractions] = useState([])
const [days, setDays] = useState([])
const [currentUser, setCurrentUser] = useState(null)

useEffect(() => {
    fetch(`http://localhost:3000/restaurants`)
        .then(resp => resp.json())
        .then(restaurantsArray => {
            setRestaurants(restaurantsArray)
        })
}, [])

useEffect(() => {
    fetch(`http://localhost:3000/attractions`)
        .then(resp => resp.json())
        .then(attractionsArray => {
            setAttractions(attractionsArray)
        })
}, [])

useEffect(() => {
    fetch(`http://localhost:3000/users/1`)
        .then(resp => resp.json())
        .then(user => {
    
            setDays(user.days)
        })
}, [])





console.log(restaurants)

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/attractions">
                    <AttractionList attractions={attractions} />
                </Route>
                <Route exact path="/restaurants">
                    <RestaurantsList restaurants={restaurants} />
                </Route>
                <Route exact path="/days">
                    <DaysList days={days}/>
                </Route>
                <Route exact path="/new_day">
                    <NewDay />
                </Route>
                <Route path="*">
                    <h1> 404 not found </h1>
                </Route>
            </Switch>
        </div>
    )
}

export default DisplayContainer;