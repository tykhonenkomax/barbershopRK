import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import sidebarReducer from "./sidebarReducer";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";
import appointmentReducer from "./appointmentReducer";

const rootReducer = combineReducers({
    sidebar: sidebarReducer, 
    loader: loaderReducer,
    user: userReducer,
    appointment : appointmentReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
