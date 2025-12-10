const SET_USER = "SET_USER"
const SET_ERROR = "SET_ERROR"
const SET_APPOINTMENTS = "SET_APPOINTMENTS"
const SET_UNAVAILABLEDATES = "SET_UNAVAILABLEDATES"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: {},
    isAuth: false,
    error: null,
    appointments: [],
    unavailableDates: []
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload
            }
        case SET_UNAVAILABLEDATES:
            return {
                ...state,
                unavailableDates: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                currentUser: {},
                isAuth: false,
                error: null,
                appointments: [],
                unavailableDates: []
            }
        default:
            return state
    }
}


export const setUser = user => ({ type: SET_USER, payload: user })
export const setError = error => ({ type: SET_ERROR, payload: error })
export const setAppointments = data => ({ type: SET_APPOINTMENTS, payload: data })
export const setUnavailableDates = data => ({ type: SET_UNAVAILABLEDATES, payload: data })

export const logout = () => ({ type: LOGOUT })