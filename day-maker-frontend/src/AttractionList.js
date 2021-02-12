import React from 'react';
import Attraction from "./Attraction"
import SearchFilter2 from "./SearchFilter2"

function AttractionList({ attractions }) {
    const attractionList = attractions.map((attraction) => {
        return <Attraction key={attraction.id} attraction={attraction} />
    })
    
    return (
        <div className="w3-row-padding">
            <SearchFilter2 />
            {attractionList}
        </div>
    )
}

export default AttractionList;