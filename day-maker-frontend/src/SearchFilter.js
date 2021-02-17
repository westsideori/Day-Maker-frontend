function SearchFilter({searchTerm, setSearchTerm}) {

    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        
        <div className="w3-container w3-margin-bottom" style={{width: '50%'}}>
            <h2 className="w3-text-white">Search Restaurants</h2>     
            <input value={searchTerm} onChange={handleChange} className="w3-input w3-border" name="search" type="text" placeholder="Search..." />
        </div>
        
    )
}

export default SearchFilter;