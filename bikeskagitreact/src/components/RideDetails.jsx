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
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="bg-gradient-to-r from-cyan-100 to-blue-300">
                    <p className="font-semibold text-gray-700 dark:text-gray-400">Date: <span className="font-normal text-gray-700 dark:text-gray-400">{ride.date}</span></p>
                    <p className="font-semibold text-gray-700 dark:text-gray-400">Start Location: <span className="font-normal text-gray-700 dark:text-gray-400">{ride.startloc}</span></p>
                    <p className="font-semibold text-gray-700 dark:text-gray-400">End Location: <span className="font-normal text-gray-700 dark:text-gray-400">{ride.endloc}</span></p>
                    <p className="font-semibold text-gray-700 dark:text-gray-400">Miles (one way): <span className="font-normal text-gray-700 dark:text-gray-400">{ride.mileage}</span></p>
                    <p className="font-semibold text-gray-700 dark:text-gray-400">Elevation (ft): <span className="font-normal text-gray-700 dark:text-gray-400">{ride.elevation}</span></p>
                    <p className="font-semibold text-gray-700 dark:text-gray-400">Notes: <span className="font-normal text-gray-700 dark:text-gray-400">{ride.notes}</span></p>
                    <p className="font-semibold text-gray-700 dark:text-gray-400">Rest Location (lat/lon): <span className="font-normal text-gray-700 dark:text-gray-400">{ride.restpin}</span></p>
                    <button onClick={handleClick} className="shadow bg-orange-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">delete</button>
                </div>
        </div>
    )
}

export default RideDetails