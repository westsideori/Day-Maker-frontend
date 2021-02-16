import { useState } from 'react'

function Attraction({ attraction }) {

    const [infoShowing, setInfoShowing] = useState(false)

    const toggleInfo = () => {
        setInfoShowing((infoShowing) => !infoShowing)
    }

    return (
        <div className="w3-third" >
            <div className="w3-panel w3-card w3-hover-shadow" onClick={toggleInfo} >
                <img src={attraction.image} alt={attraction.name} className="w3-image w3-round" />
                <h2>{attraction.location}</h2>
                <h1>{attraction.name}</h1>
                {infoShowing ? (
                    <>
                        <h3>{attraction.category}</h3>
                        <p>{attraction.description}</p>

                    </>
                ) : (
                        null
                )}
            </div>
        </div>
    )
}

export default Attraction;