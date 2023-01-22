
import { useEffect } from "react";
import { useRidesContext } from "../hooks/useRidesContext"
import RideDetails from "../components/RideDetails"



const AllEntry = () => {
    const {ride, dispatch} = useRidesContext()

    // GET all rides from DB
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

    return (
        <div className="home"> 
            <div className="rides">

                {ride && ride.map((ride) =>(
                    <RideDetails key={ride._id} ride={ride} />
                ))}
            </div>
        </div>
    );
}

export default AllEntry;
