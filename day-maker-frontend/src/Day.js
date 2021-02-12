function Day({day}){

    const dayRests = day.restaurants.map(rest => {
        return ( 
            <div key={rest.id}>
                {rest.name} - {rest.category}
            </div>
       )
    })

    return(
        <div>
            {dayRests}
        </div>
    )
}

export default Day;