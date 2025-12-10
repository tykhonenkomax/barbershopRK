import React from 'react';
import { useDispatch } from "react-redux";
import { showSidebar } from "../../reducers/sidebarReducer";
import './button.scss';


const Button = ({text}) => {
  const dispatch = useDispatch()

  return (
    <div className='button' onClick={() => dispatch(showSidebar('booking'))}>
        <span>{text}</span>
    </div>
  )
}

export default Button