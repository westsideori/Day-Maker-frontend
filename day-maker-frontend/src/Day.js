function Day({ day }) {

    const { user_id, restaurants, attractions } = day
    console.log(attractions[0])

    let breakfast = ""
    let lunch = ""
    let dinner = ""

    restaurants.forEach((rest) => {
        if (rest.category === "breakfast") {
            breakfast = rest
        } else if (rest.category === "lunch") {
            lunch = rest
        } else if (rest.category === "dinner") {
            dinner = rest
        }
    })

    return (
        <div className="w3-third">
            <h1>{day.date}</h1> 
            <div className="w3-card">
                <p>Breakfast - {breakfast.name}</p>
                <p>Morning Activity - {attractions[0].name}</p>
                <p>Lunch - {lunch.name}</p>
                <p>Afternoon Activity - {attractions[1].name}</p>
                <p>Dinner - {dinner.name}</p>
                <p>Evening Activity - {attractions[2].name}</p>
            </div>
        </div>
    )
}

export default Day;