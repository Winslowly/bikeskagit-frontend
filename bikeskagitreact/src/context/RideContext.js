import { createContext, useReducer } from 'react'

export const RidesContext = createContext()

export const ridesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RIDES' :
            return {
                rides: action.payload
            }
        case 'CREATE_RIDE':
            return {
                rides:[action.payload, ...state.rides]
            }    
        default:
            return state
    }
}

export const RidesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ridesReducer, {
        rides: null
    })



    return (
        <RidesContext.Provider value={{...state, dispatch}}>
            { children }
        </RidesContext.Provider>
    )
}