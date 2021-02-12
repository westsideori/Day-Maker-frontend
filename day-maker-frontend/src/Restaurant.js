import React from 'react';

function Restaurant({restaurant}){
    return(
        <div className="w3-third" >
            
            <div className="w3-panel w3-card" >
                <img src={restaurant.image} alt={restaurant.name} className="w3-image w3-round"/>
                <h1>{restaurant.name}</h1>
                <h2>{restaurant.location}</h2>
                <h3>{restaurant.category}</h3>
                <p>{restaurant.description}</p>
            </div>
        </div>
    )
}

export default Restaurant;