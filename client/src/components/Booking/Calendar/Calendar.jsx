import { useState } from 'react'
import { setTime } from '../../../reducers/appointmentReducer';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import he from "date-fns/locale/he";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import './calendar.scss'

const Calendar = ({ isOpen, setIsOpen, setIsActiveCategory, setTitle, time, barber }) => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(time);

    const handleChangeDay = (date) => {
        setStartDate(date);
        setIsOpen(!isOpen);
    }

    const crntUnavailableDatesFormat = () => {
        const crntDates = [];
        if(barber) {
            barber.unavailableDates.forEach(date => {
                crntDates.push(new Date(date));
            });
            return crntDates
        }
    }

    const handleSubmit = () => {
        setIsOpen(!isOpen);
        dispatch(setTime(startDate));
        setIsActiveCategory('');
        setTitle("Вибір дати");
    }

    return (
        <div className="booking__list active">
            <div className='calendar'>
                {!isOpen ? (
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => handleChangeDay(date)}
                        dateFormat="MMMM d, yyyy h:mm"
                        inline
                        locale={he}
                        minDate={new Date()}
                    />
                ) : (
                    <>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            inline
                            minTime={setHours(setMinutes(startDate, 0), 8)}
                            maxTime={setHours(setMinutes(startDate, 0), 21)}
                            excludeTimes={crntUnavailableDatesFormat()}
                            timeFormat="H:mm"
                            timeIntervals={30}
                        />
                        <span dir="ltr">
                            {format(new Date(startDate), "d / M / yy - ")}
                            {new Date(startDate).getHours() !== 0 && format(new Date(startDate), "H:mm")} :Ви вибрали дату
                        </span>
                        <button className='calendar__btn btn' onClick={handleSubmit}>Підтвердити</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Calendar;
