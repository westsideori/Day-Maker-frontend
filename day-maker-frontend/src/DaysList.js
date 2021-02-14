import SearchFilter3 from "./SearchFilter3";
import Day from './Day'

function DaysList({days}) {

    const dayItems = days.map((day) => {
        return <Day key={day.id} day={day}/>
    })
    return (
        <div>
            <SearchFilter3 />
            {dayItems}
        </div>
    )
}

export default DaysList;