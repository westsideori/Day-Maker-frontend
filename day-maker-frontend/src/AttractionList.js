import {useState} from 'react';
import Attraction from "./Attraction"
import SearchFilter2 from "./SearchFilter2"

function AttractionList({ attractions }) {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredAttractions = attractions.filter((attraction) => {
        return attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const attractionList = filteredAttractions.map((attraction) => {
        return <Attraction key={attraction.id} attraction={attraction} />
    })
    
    return (
        <div className="w3-row-padding">
            <SearchFilter2 searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {attractionList}
        </div>
    )
}

export default AttractionList;