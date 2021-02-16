import { useState } from 'react';

function Restaurant({ restaurant }) {

    const [infoShowing, setInfoShowing] = useState(false)

    const toggleInfo = () => {
        setInfoShowing((infoShowing) => !infoShowing)
    }

    return (
        <div className="w3-third" >
            <div className="w3-panel w3-card w3-hover-shadow" onClick={toggleInfo}>
                <img src={restaurant.image} alt={restaurant.name} className="w3-image w3-round" />
                <h1>{restaurant.name}</h1>
                <h2>{restaurant.location}</h2>
                {infoShowing ? (
                    <>
                        <h3>{restaurant.cuisine}</h3>
                        <h3>{restaurant.category}</h3>
                        <p>{restaurant.description}</p>

                    </>
                ) : (
                        null
                    )}
            </div>
        </div>
    )
}

export default Restaurant;