import axios from 'axios'
import { API_URL } from "../config";
import { hideLoader, showLoader } from "../reducers/loaderReducer";
import { setAppointments, setError, setUnavailableDates } from "../reducers/userReducer";

export const newAppointment = (appointment, user) => {
    return async dispatch => {
        try {
            const data = {
                userID: user._id,
                barberID: appointment.barber._id,
                serviceID: appointment.service,
                dateTime: appointment.time
            }

            dispatch(showLoader())
            const res = await axios.post(`${API_URL}api/appointment`, data)
            return res.data.message
        } catch (err) {
            dispatch(setError(err.response.data))
        } finally {
            dispatch(hideLoader())
        }
    }
}

export const setDatesByUserID = (userID) => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const res = await axios.get(`${API_URL}api/appointment/${userID}`)         
            dispatch(setAppointments(res.data.appointment))
            if (res.data.unavailableDates)
                dispatch(setUnavailableDates(res.data.unavailableDates))
        } catch (err) {
            dispatch(setError(err.response.data))
        } finally {
            dispatch(hideLoader())
        }
    }
}