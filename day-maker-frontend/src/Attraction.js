function Attraction({attraction}) {
    return(
        <div className="w3-third" >
            <div className="w3-panel w3-card" >
                <img src={attraction.image} alt={attraction.name} className="w3-image w3-round"/>
                <h1>{attraction.name}</h1>
                <h2>{attraction.location}</h2>
                <h3>{attraction.category}</h3>
                <p>{attraction.description}</p>
            </div>
        </div>
    )
}

export default Attraction;