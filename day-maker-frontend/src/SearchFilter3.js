function SearchFilter3({searchTerm, setSearchTerm}) {

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return(
        <div className="w3-container w3-margin-bottom" style={{width: '50%'}}>
            <h2 className="w3-text-white">Search Your Days</h2>     
            <input className="w3-input w3-border" value={searchTerm} onChange={handleChange} name="search" type="text" placeholder="Search..." />
        </div>
    )
}

export default SearchFilter3;