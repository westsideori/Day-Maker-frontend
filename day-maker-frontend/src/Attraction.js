import { useState } from 'react'

function Attraction({ attraction }) {

    const [infoShowing, setInfoShowing] = useState(false)

    const toggleInfo = () => {
        setInfoShowing((infoShowing) => !infoShowing)
    }

    return (
        <div className="w3-third w3-container w3-margin-bottom w3-hover-shadow" onClick={toggleInfo}>
            {/* <div className="w3-panel w3-card w3-hover-shadow" onClick={toggleInfo} > */}
                <img src={attraction.image} alt={attraction.name} className="w3-hover-opacity" style={{width: "100%", height: "50vh"}} />
                <div className="w3-container w3-white">
                    <h2><b>{attraction.name}</b></h2>
                    <h3>{attraction.location}</h3>
                </div>
                {infoShowing ? (
                    <>
                        <h3>{attraction.category}</h3>
                        <p>{attraction.description}</p>

                    </>
                ) : (
                        null
                )}
            {/* </div> */}
        </div>
    )
}

export default Attraction;