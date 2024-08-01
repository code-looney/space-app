import React, {useContext} from 'react'
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';

const MobileMenu = (props) => {
  const {...rest} = props;
  const context = useContext(AppContext);

  return (
    <div className='flex flex-col w-[254px] h-screen right-0 top-0 absolute text-white backdrop-blur-xl bg-white/5 bg-red-600'>
    </div>
  )
}

export default MobileMenu