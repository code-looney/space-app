import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';

const DestinationNavLinks = () => {
  const context = useContext(AppContext);

  return (
    <div className={`w-[327px] xl:h-auto flex justify-center xl:w-full items-center right-0 top-0 no-scrollbar pb-[1em]
      ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }
      text-white`}>
      <ul className='h-full flex w-full gap-[2em] justify-center items-center xl:justify-start'>
        {context.destinationNavigation && context.destinationNavigation.map(route => (
          <li key={route.id} 
            className={`flex uppercase items-center font-normal justify-center tracking-[0.125em] border-b-[0.1875em] gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-b-white 
              ${context.destinationHoverUnderlineColor === route.id ? 'border-b-white' : 'border-b-transparent'}`}>
                {/* when refresh the page, the underline color will go reset.
                Think of a sulution to not have the underline color when active page */}
            <NavLink 
              to={`/destination/${route.path}`}  // Ensure it matches the route structure
              onClick={() => context.handleDestinationNavLinkClick(route.id)}
              className="flex gap-3 h-[32px] justify-self-center text-[0.875rem] lg:text-[1rem] font-barlowCondensed">
              {route.page}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationNavLinks;
