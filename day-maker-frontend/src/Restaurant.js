import { useState } from 'react';
import Popup from 'reactjs-popup'


function Restaurant({ restaurant }) {

    const [infoShowing, setInfoShowing] = useState(false)

    const toggleInfo = () => {
        setInfoShowing((infoShowing) => !infoShowing)
    }

    return (
        <Popup
            trigger={
                <div className="w3-third w3-container w3-margin-bottom w3-hover-shadow" onClick={toggleInfo}>
                    <img src={restaurant.image} alt={restaurant.name} className="w3-hover-opacity" style={{ width: "100%", height: "50vh" }} />
                    <div className="w3-container w3-white">
                        <h2><b>{restaurant.name}</b></h2>
                        <h3>{restaurant.location}</h3>
                    </div>
                </div>}
            modal>
                <div className="w3-container modal" >
                    <div className="content" style={{ background: "white", height: "50vh", width: "50vw" }}>
                        <img src={restaurant.image} alt={restaurant.name} style={{ width: "300px" }}/>
                        <h3>{restaurant.cuisine}</h3>
                        <h3>{restaurant.category}</h3>
                        <p>{restaurant.description}</p>
                    </div>
                </div>
                        
        </Popup>
    )
}

export default Restaurant;