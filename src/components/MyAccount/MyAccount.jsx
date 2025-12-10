import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { setDatesByUserID } from '../../actions/appointment';
import { TbCalendarStats } from 'react-icons/tb';
import DatePicker from 'react-datepicker';
import he from "date-fns/locale/he";
import { format } from "date-fns";
import { HiLogout } from 'react-icons/hi';
import { logout } from '../../reducers/userReducer';
import { hideSidebar } from '../../reducers/sidebarReducer';
import { hideLoader, showLoader } from '../../reducers/loaderReducer';
import { API_URL } from '../../config';
import Spinner from '../Spinner/Spinner';
import "react-datepicker/dist/react-datepicker.css";
import './myAccount.scss';

const MyAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);
  const appointments = useSelector(state => state.user.appointments);
  const unavailableDates = useSelector(state => state.user.unavailableDates);
  const [startDate, setStartDate] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(setDatesByUserID(user._id));
    setMessage('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const crntDatesFormat = () => {
    const dates = [];
    if (appointments) {
      appointments.forEach(date => {
        dates.push(new Date(date.dateTime));
      });
    }
    if (unavailableDates) {
      unavailableDates.forEach(date => {
        dates.push(new Date(date));
      });
    }

    return dates;
  }

  const handleLogout = () => {
    dispatch(logout());
    dispatch(hideSidebar());
  }

  const handleCancel = async (crntDate) => {
    try {
      dispatch(showLoader());
      const res = await axios.delete(`${API_URL}api/appointment/${crntDate}`);
      setMessage(res.data);
      dispatch(setDatesByUserID(user._id));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(hideLoader());
    }
  }

  return (
      <Sidebar title="Мій акаунт" setMessage={setMessage}>
        <div className="myAccount">
          <div className="myAccount__logout" onClick={() => handleLogout()}>
            Вийти <HiLogout />
          </div>
          <div className="myAccount__appointments">
            <div className="myAccount__appointments-header">
              <TbCalendarStats /> <span>Мої записи:</span>
            </div>
            <DatePicker
                key="example9"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                includeDates={crntDatesFormat()}
                dateFormat="MMMM d, yyyy h:mm"
                inline
                locale={he}
                minDate={new Date()}
            />
          </div>
        </div>

        {
            appointments && appointments.map(date => (
                new Date(date.dateTime).getDate() === new Date(startDate).getDate() &&
                <div className='myAccount__appointments-description' key={date.dateTime}>
                  У мене запис на:
                  <span>{format(new Date(date.dateTime), "H:mm")}</span>
                  <button className='btn' onClick={() => handleCancel(date.dateTime)}>Скасувати</button>
                </div>
            ))
        }
        {
            unavailableDates && unavailableDates.map(date => (
                new Date(date).getDate() === new Date(startDate).getDate() &&
                <div className='myAccount__appointments-description' key={date}>
                  У мене зустріч на:
                  <span>{format(new Date(date), "H:mm")}</span>
                  <button className='btn' onClick={() => handleCancel(date)}>Скасувати</button>
                </div>
            ))
        }

        <Spinner />
        <span className='myAccount__message'>{message && message}</span>
      </Sidebar>
  );
}

export default MyAccount;
