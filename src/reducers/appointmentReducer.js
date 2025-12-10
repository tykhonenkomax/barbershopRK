const SET_BARBER = "SET_BARBER"
const SET_TIME = "SET_TIME"
const SET_SERVICE = "SET_SERVICE"
const RESET_TIME_SERVICE = "RESET_TIME_SERVICE"
const RESET_APPOINTMENT = "RESET_APPOINTMENT"

const defaultState = {
    barber: {},
    time: null,
    service: null
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_BARBER:
            return {
                ...state,
                barber: action.payload
            }
        case SET_TIME:
            return {
                ...state,
                time: action.payload
            }
        case SET_SERVICE:
            return {
                ...state,
                service: action.payload
            }
        case RESET_TIME_SERVICE:
            return {
                ...state,
                time: null,
                service: null
            }
        case RESET_APPOINTMENT:
            return {
                barber: {},
                time: null,
                service: null
            }
        default:
            return state
    }
}


export const setBarber = (barber) => ({ type: SET_BARBER, payload: barber })
export const setTime = time => ({ type: SET_TIME, payload: time })
export const setService = service => ({ type: SET_SERVICE, payload: service })
export const resetTimeService = () => ({ type: RESET_TIME_SERVICE })
export const resetAppointment = () => ({ type: RESET_APPOINTMENT })