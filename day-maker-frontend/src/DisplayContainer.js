import { useState, useEffect } from 'react'
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
    const [morningAttractions, setMorningAttractions] = useState([])
    const [afternoonAttractions, setAfternoonAttractions] = useState([])
    const [eveningAttractions, setEveningAttractions] = useState([])
    const [days, setDays] = useState([])
    const [dayRests, setDayRests] = useState([])
    const [dayAttrs, setDayAttrs] = useState([])
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
        fetch(`http://localhost:3000/attractions/hour/morning`)
            .then(resp => resp.json())
            .then(attractionsArray => {
                setMorningAttractions(attractionsArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/attractions/hour/afternoon`)
            .then(resp => resp.json())
            .then(attractionsArray => {
                setAfternoonAttractions(attractionsArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/attractions/hour/evening`)
            .then(resp => resp.json())
            .then(attractionsArray => {
                setEveningAttractions(attractionsArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/users/1/days`)
            .then(resp => resp.json())
            .then(days => {

                setDays(days)
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

    useEffect(() => {
        fetch(`http://localhost:3000/day_restaurants`)
            .then(resp => resp.json())
            .then(dayRests => {

                setDayRests(dayRests)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/day_attractions`)
            .then(resp => resp.json())
            .then(dayAttrs => {
                setDayAttrs(dayAttrs)
            })
    }, [])

    const handleUpdate = (updatedDayRest) => {
        const updatedDayRests = dayRests.map((dayRest) => {
          if (dayRest.id === updatedDayRest.id) {
            return updatedDayRest
          } else {
            return dayRest
          }
        })
        setDayRests(updatedDayRests)
      }



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
                    <DaysList days={days}
                        setDays={setDays}
                        restaurants={restaurants}
                        breakfastRests={breakfastRestaurants}
                        lunchRests={lunchRestaurants}
                        dinnerRests={dinnerRestaurants}
                        morningAttractions={morningAttractions}
                        afternoonAttractions={afternoonAttractions}
                        eveningAttractions={eveningAttractions}
                        dayRests={dayRests}
                        dayAttrs={dayAttrs}
                        setDayRests={setDayRests}
                        setDayAttrs={setDayAttrs}
                        handleUpdate={handleUpdate}
                    />
                </Route>
                <Route exact path="/new_day">
                    <NewDay
                        breakfastRestaurants={breakfastRestaurants}
                        lunchRestaurants={lunchRestaurants}
                        dinnerRestaurants={dinnerRestaurants}
                        attractions={attractions}
                        days={days}
                        setDays={setDays} />
                </Route>
                <Route path="*">
                    <h1> 404 not found </h1>
                </Route>
            </Switch>
        </div>
    )
}

export default DisplayContainer;