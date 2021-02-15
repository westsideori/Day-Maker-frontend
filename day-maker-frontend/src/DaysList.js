import SearchFilter3 from "./SearchFilter3";
import Day from './Day'

function DaysList({ days, setDays, breakfastRests, lunchRests, dinnerRests, setDayRests, dayRests, setDayAttrs, dayAttrs, handleUpdate, morningAttractions, eveningAttractions, afternoonAttractions }) {

    const deleteDay = (id) => {
        const updatedDays = days.filter((day) => {
          return day.id !== id
        })
    
        setDays(updatedDays)
      }

    const dayItems = days.map((day) => {
        return <Day
            key={day.id}
            day={day}
            days={days}
            setDays={setDays}
            
            morningAttractions={morningAttractions}
            afternoonAttractions={afternoonAttractions}
            eveningAttractions={eveningAttractions}
            breakfastRests={breakfastRests}
            lunchRests={lunchRests}
            dinnerRests={dinnerRests}
            
            dayRests={dayRests}
            setDayRests={setDayRests}
            dayAttrs={dayAttrs}
            setDayAttrs={setDayAttrs}
            handleUpdate={handleUpdate}
            deleteDay={deleteDay}
        />
    })
    return (
        <div>
            <SearchFilter3 />
            {dayItems}
        </div>
    )
}

export default DaysList;