import { useState } from 'react'
import {useHistory} from 'react-router-dom'

function NewDay({ currentUser, days, setDays }) {

    const history = useHistory()
    
    const [formData, setFormData] = useState({
        user_id: currentUser.id,
        date: ""
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({...formData, date: e.target.value})
    }

    const makeMyDay = () => {
        
        fetch(`http://localhost:3000/days`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
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
            <input type="date" value={formData.date} onChange={handleChange}></input>
            <button onClick={makeMyDay} className="w3-button w3-blue">Make My Day!</button>
        </div>
    )
}

export default NewDay;