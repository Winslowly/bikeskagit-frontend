import { RidesContext } from '../context/RideContext'
import { useContext } from 'react'

export const useRidesContext = () => {
    const context = useContext(RidesContext)

    if(!context) {
        throw Error('useRidesContext must be used inside an RideContextProvider ')
    }

    return context
}