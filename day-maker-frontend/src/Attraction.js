import Popup from 'reactjs-popup';
import './style.css';

function Attraction({ attraction }) {

 
    return (
        <Popup
            trigger={
                <div className="w3-third w3-container w3-margin-bottom w3-hover-shadow">
                    <img src={attraction.image} alt={attraction.name} className="w3-hover-opacity w3-round" style={{ width: "100%", height: "50vh" }} />
                    <div className="w3-container w3-white">
                        <h2><b>{attraction.name}</b></h2>
                        <h3>{attraction.location}</h3>
                    </div>
                </div>}
            modal>
            <div className="w3-container modal-test" >
                <div className="content" >
                    <img src={attraction.image} alt={attraction.name} className="w3-round" style={{ width: "300px", border: "solid", borderColor: "black"}} />
                    <h2><b>Name: </b>{attraction.name}</h2>
                    <h3><b>Category: </b>{attraction.category}</h3>
                    <p><b>Description: </b>{attraction.description}</p>
                </div>
            </div>
        </Popup>
    )
}

export default Attraction;