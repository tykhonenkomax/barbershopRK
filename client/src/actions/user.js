import axios from 'axios'
import { API_URL } from "../config";
import { hideLoader, showLoader } from "../reducers/loaderReducer";
import { setUser, setError } from "../reducers/userReducer";
import { hideSidebar } from "../reducers/sidebarReducer";

export const login = (email, password) => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const res = await axios.post(`${API_URL}api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
            dispatch(hideSidebar())
        } catch (err) {
            dispatch(setError(err.response.data))        
        } finally {
            dispatch(hideLoader())
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const res = await axios.get(`${API_URL}api/auth/auth`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export const barbers = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const res = await axios.get(`${API_URL}api/users/find/barbers`)
         
             return res.data.barbers
        } catch (err) {
            dispatch(setError(err.response.data))    
        } finally {
            dispatch(hideLoader())
        }
    }
}



