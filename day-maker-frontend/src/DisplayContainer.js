import restaurants from "./restaurants";
import RestaurantsList from "./RestaurantsList";
import React from 'react';

function DisplayContainer() {
    
    return(
        <div>
            <RestaurantsList restaurants={restaurants}/>
        </div>
    )
}

export default DisplayContainer;