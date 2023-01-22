
import { useEffect } from "react";
import { useRidesContext } from "../hooks/useRidesContext"



const AllEntry = () => {
    const {rides, dispatch} = useRidesContext()

    // GET
    useEffect(() => {
        const fetchRides = async() => {
            const response = await fetch('/api/rides')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_RIDES', payload: json})
            }
        }

        fetchRides()
    }, [])

    // DELETE
    // const handleClick = async () => {
    //     const response = await fetch('/api/rides/' + rides._id {
    //         method: 'DELETE'
    //     })
    //     const json = await response.json()

    //     if (response.ok) {

    //     }
    // }

    return (
        <div className="home"> 
            <div className="rides">

                {rides && rides.map((rides) =>(
                    <>
                    <p key={rides._id}>Date: {rides.date}</p>
                    <p key={rides._id}>Start Location: {rides.startloc}</p>
                    <p key={rides._id}>End Location: {rides.endloc}</p>
                    <p key={rides._id}>Miles (one way): {rides.mileage}</p>
                    <p key={rides._id}>Elevation (ft): {rides.elevation}</p>
                    <p key={rides._id}>Notes: {rides.notes}</p>
                    <p key={rides._id}>Rest Location (lat/lon): {rides.restpin}</p>
                    {/* <span onClick={handleClick}>delete</span> */}
                    </>
                ))}
            </div>
        </div>
    );
}

export default AllEntry;
