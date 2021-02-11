import React from 'react';

function Restaurant({restaurant}){
    return(
        <div>
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.location}</h2>
            <h3>{restaurant.category}</h3>
            <p>{restaurant.description}</p>
        </div>
    )
}

export default Restaurant;