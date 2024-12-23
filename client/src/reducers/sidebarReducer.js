const SHOW_SIDEBAR = 'SHOW_SIDEBAR'
const HIDE_SIDEBAR = 'HIDE_SIDEBAR'

const defaultState = {
    sidebar: false,
    currentSidebarName: null
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_SIDEBAR: return {...state, sidebar: true, currentSidebarName: action.payload}
        case HIDE_SIDEBAR: return {...state, sidebar: false}       
        default:
            return state
    }
}


export const showSidebar = (name) => ({type: SHOW_SIDEBAR, payload:name})
export const hideSidebar = () => ({type: HIDE_SIDEBAR})