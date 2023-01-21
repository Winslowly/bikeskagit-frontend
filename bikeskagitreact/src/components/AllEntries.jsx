
import { useEffect, useState } from "react";



const AllEntry = () => {
    const[rides, setRides] = useState(null)

    useEffect(() => {
        const fetchRides = async() => {
            const response = await fetch('/api/rides')
            const json = await response.json()

            if (response.ok) {
                setRides(json)
            }
        }

        fetchRides()
    }, [])

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
                    <br></br>
                    </>
                ))}
            </div>
        </div>
    );
}

export default AllEntry;
