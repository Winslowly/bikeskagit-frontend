import { createContext, useReducer } from 'react'

export const RidesContext = createContext()

export const ridesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RIDES' :
            return {
                ride: action.payload
            }
        case 'CREATE_RIDE':
            return {
                ride:[action.payload, ...state.ride]
            }    
        case 'DELETE_RIDE':
            return {
                ride: state.ride.filter((r) => r._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const RidesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ridesReducer, {
        ride: null
    })



    return (
        <RidesContext.Provider value={{...state, dispatch}}>
            { children }
        </RidesContext.Provider>
    )
}