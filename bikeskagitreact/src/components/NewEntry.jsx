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
        <div className="bg-gradient-to-r from-cyan-100 to-blue-300">


                <div className="md:w-1/3">
                    <label className="block text-orange-500 font-bold md:text-right mb-1 md:mb-0 pr-20" for="inline-full-name">
                    Add a new ride to the collection!
                    </label>
                </div>

       
    <form className= "create" onSubmit={handleSubmit}>
        
        <div className="w-full max-w-sm">

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Date 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" onChange={(e) => setDate(e.target.value)} value={date}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Start Location 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" onChange={(e) => setStartLoc(e.target.value)} value={startloc}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    End Location
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" onChange={(e) => setEndLoc(e.target.value)} value={endloc}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Miles 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" onChange={(e) => setMileage(e.target.value)} value={mileage}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Elevation 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" onChange={(e) => setElevation(e.target.value)} value={elevation}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Notes 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" onChange={(e) => setNotes(e.target.value)} value={notes}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Rest Spot 
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500" id="inline-full-name" type="text" onChange={(e) => setRestPin(e.target.value)} value={restpin}/>
                </div>
            </div>

        </div>

        <button className="shadow bg-orange-500 hover:bg-black-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Submit Ride</button>

        {error && <div className="error">{error}</div>}

    </form>
    </div>
)
}

export default NewEntry;
