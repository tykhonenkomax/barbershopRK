import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from '../../reducers/sidebarReducer';
import { resetAppointment } from '../../reducers/appointmentReducer';
import './sidebar.scss'
import { useEffect } from "react";

const Sidebar = ({ children, title, setIsDisabled, setMessage }) => {
    const dispatch = useDispatch()
    const isSidebar = useSelector(state => state.sidebar.sidebar)
    const appointment = useSelector(state => state.appointment);

    const hundleClick = () => {
        dispatch(hideSidebar())
        if (appointment)
            dispatch(resetAppointment())

        if (setIsDisabled)
            setIsDisabled(true)
        if (setMessage)
        setMessage('')
    }

    // disable scrolling when the menu is open
    useEffect(() => {
        isSidebar ?
            document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'unset';
    }, [isSidebar]);

    return (
        <div className={`sidebar ${isSidebar && "active"}`}>
            <div className="sidebar__wrapper">
                <div className="sidebar__navigation">
                    <div className="sidebar__close" onClick={() => hundleClick()}><MdClose /></div>
                </div>
                <h2 className="sidebar__title ">- {title} -</h2>
                {children}
            </div>
        </div>
    )
}

export default Sidebar

