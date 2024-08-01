import React, {useContext} from 'react'
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';

const MobileMenu = (props) => {
  const {...rest} = props;
  const context = useContext(AppContext);

  return (
    <div className='outline flex flex-col right-0 top-0 absolute text-white  '>

    </div>
  )
}

export default MobileMenu