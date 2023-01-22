import { useState } from "react";
import { useRidesContext } from "../hooks/useRidesContext"


const NewEntry = () => {
    const { dispatch } = useRidesContext()
    const [date, setDate] = useState('')
    const [startloc, setStartLoc] = useState('')
    const [endloc, setEndLoc] = useState('')
    const [mileage, setMileage] = useState('')
    const [elevation, setElevation] = useState('')
    const [notes, setNotes] = useState('')
    const [restpin, setRestPin] = useState('')
    const [error, setError] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ride = {date, startloc, endloc, mileage, elevation, notes, restpin}

        const response = await fetch('/api/rides', {
            method: 'POST',
            body: JSON.stringify(ride),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setDate('')
            setStartLoc('')
            setEndLoc('')
            setMileage('')
            setElevation('')
            setNotes('')
            setRestPin('')
            setError(null)
            console.log('new ride added', json)
            dispatch({type: 'CREATE_RIDE', payload: json})
        }
    }


    return (
    <form className= "create" onSubmit={handleSubmit}>
        <h2> Add a new ride to the collection!</h2>
        <label>Date: </label>
        <input type="text" onChange={(e) => setDate(e.target.value)} value={date}/>

        <label>Start Location:  </label>
        <input type="text" onChange={(e) => setStartLoc(e.target.value)} value={startloc}/>

        <label>End Location: </label>
        <input type="text" onChange={(e) => setEndLoc(e.target.value)} value={endloc}/>

        <label>Miles: </label>
        <input type="text" onChange={(e) => setMileage(e.target.value)} value={mileage}/>

        <label>Elevation:  </label>
        <input type="text" onChange={(e) => setElevation(e.target.value)} value={elevation}/>

        <label>Notes: </label>
        <input type="text" onChange={(e) => setNotes(e.target.value)} value={notes}/>

        <label>Rest Spot:  </label>
        <input type="text" onChange={(e) => setRestPin(e.target.value)} value={restpin}/>
    
        <button>Submit Ride</button>
        {error && <div className="error">{error}</div>}

    </form>
)
}

export default NewEntry;
