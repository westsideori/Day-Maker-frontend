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
const [breakfastRestaurants, setBreakfastRestaurants] = useState([])
const [lunchRestaurants, setLunchRestaurants] = useState([])
const [dinnerRestaurants, setDinnerRestaurants] = useState([])


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

useEffect(() => {
    fetch(`http://localhost:3000/restaurants/category/breakfast`)
        .then(resp => resp.json())
        .then(breakfastSpots => {
            setBreakfastRestaurants(breakfastSpots)
        })
}, [])

useEffect(() => {
    fetch(`http://localhost:3000/restaurants/category/lunch`)
        .then(resp => resp.json())
        .then(lunchSpots => {
            setLunchRestaurants(lunchSpots)
        })
}, [])

useEffect(() => {
    fetch(`http://localhost:3000/restaurants/category/dinner`)
        .then(resp => resp.json())
        .then(dinnerSpots => {
            setDinnerRestaurants(dinnerSpots)
        })
}, [])

console.log(breakfastRestaurants)



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
                    <DaysList days={days} setDays={setDays}/>
                </Route>
                <Route exact path="/new_day">
                    <NewDay 
                    breakfastRestaurants={breakfastRestaurants} 
                    lunchRestaurants={lunchRestaurants}
                    dinnerRestaurants={dinnerRestaurants}
                    attractions={attractions} 
                    days={days}
                    setDays={setDays}/>
                </Route>
                <Route path="*">
                    <h1> 404 not found </h1>
                </Route>
            </Switch>
        </div>
    )
}

export default DisplayContainer;