import {useHistory} from 'react-router-dom'

function NewDay({ currentUser, days, setDays }) {

    const history = useHistory()

    const makeMyDay = () => {
        
        const newDay = {
            user_id: currentUser.id,
            date: "January 20"
        }
        fetch(`http://localhost:3000/days`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDay)
        })
            .then(resp => resp.json())
            .then(dayObj => {
                console.log(dayObj)
                setDays([...days, dayObj])
                history.push('/days')
            })
    }
    
    return (
        <div className="w3-panel">
            <button onClick={makeMyDay} className="w3-button w3-blue">Make My Day!</button>
        </div>
    )
}

export default NewDay;