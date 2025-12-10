import { useEffect, useState } from 'react';
import { setBarber, resetTimeService } from '../../../reducers/appointmentReducer';
import { useDispatch } from 'react-redux';
import { barbers } from "../../../actions/user";
import { images } from '../../../constants';
import { API_URL } from "../../../config";

const BarberList = ({barberID, setIsActiveCategory, setTitle}) => {
    const dispatch = useDispatch();
    const [barbersList, setBarbersList] = useState([]);

    useEffect(() => {
        dispatch(barbers()).then(result => setBarbersList(result))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = (barber) => {
        dispatch(setBarber(barber));
        dispatch(resetTimeService());
        setIsActiveCategory('')
        setTitle("קביעת מועד");
    }
  
    return (
        <ul className="booking__list active">            
            {barbersList.map((item) =>
                <li key={item._id} className={`booking__item ${barberID === item._id && "active"}`} id={item._id} onClick={() => handleClick(item)}>
                    <img className="booking__item-avatar" src={item.avatar ? API_URL + item.avatar : images.avatar} alt={item.name} />
                    <div className="booking__item-inner">
                        <h3 className='booking__item-subtitle'>barber</h3>
                        <h2 className='booking__item-title'>{item.name}</h2>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default BarberList