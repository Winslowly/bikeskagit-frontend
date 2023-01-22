import { useRidesContext } from '../hooks/useRidesContext'


const RideDetails = ({ ride }) => {
    const { dispatch } = useRidesContext()

    // DELETE a single DB entry
    const handleClick = async () => {
        const response = await fetch('/api/rides/' + ride._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_RIDE', payload: json})
        }
    }


    return (
        <div className="ride-details">
                    <p >Date: {ride.date}</p>
                    <p >Start Location: {ride.startloc}</p>
                    <p >End Location: {ride.endloc}</p>
                    <p >Miles (one way): {ride.mileage}</p>
                    <p >Elevation (ft): {ride.elevation}</p>
                    <p >Notes: {ride.notes}</p>
                    <p >Rest Location (lat/lon): {ride.restpin}</p>
                    <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default RideDetails