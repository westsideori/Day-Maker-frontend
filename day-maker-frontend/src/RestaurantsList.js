import React from 'react';
import Restaurant from "./Restaurant"
import SearchFilter from "./SearchFilter";

function RestaurantsList ({restaurants}) {

    const restaurantItems = restaurants.map((restaurant) => {
        return <Restaurant key={restaurant.id} restaurant={restaurant} />
    })

    return(
        <div className="w3-row-padding">
            <SearchFilter />
            {restaurantItems}
        </div>
    )
}

export default RestaurantsList;