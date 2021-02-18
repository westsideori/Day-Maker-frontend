import Popup from 'reactjs-popup';
import './style.css'


function Restaurant({ restaurant }) {


    return (
        <Popup
            trigger={
                <div className="w3-third w3-container w3-margin-bottom w3-hover-shadow card00" >
                    <img src={restaurant.image} alt={restaurant.name} className="w3-hover-opacity w3-round" style={{ width: "100%", height: "50vh" }} />
                    <div className="w3-container w3-white">
                        <h2><b>{restaurant.name}</b></h2>
                        <h3>{restaurant.location}</h3>
                    </div>
                </div>}
            modal>
                <div className="w3-container modal-test" >
                    <div className="content">
                        <img src={restaurant.image} alt={restaurant.name} style={{ width: "300px", border: "solid", borderColor: "black" }}/>
                        <h3><b>Cuisine:</b> {restaurant.cuisine}</h3>
                        <h4><b>Category:</b> {restaurant.category}</h4>
                        <p><b>About:</b> {restaurant.description}</p>
                    </div>
                </div>
                        
        </Popup>
    )
}

export default Restaurant;