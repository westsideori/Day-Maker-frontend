import {useState} from 'react';
import Restaurant from "./Restaurant"
import SearchFilter from "./SearchFilter";

function RestaurantsList ({restaurants}) {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredRestaurants = restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const restaurantItems = filteredRestaurants.map((restaurant) => {
        return <Restaurant key={restaurant.id} restaurant={restaurant} />
    })

    return(
        <div className="w3-row-padding">
            <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {restaurantItems}
        </div>
    )
}

export default RestaurantsList;