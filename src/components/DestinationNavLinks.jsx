import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { NavLink } from 'react-router-dom'

const DestinationNavLinks = () => {
    const context = useContext(AppContext)

  return (
    <div className={`w-[327px] h-[32px] flex justify-center items-center right-0 top-0 no-scrollbar outline
        ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }
        text-white`}>
        
          <ul className='h-full flex w-full gap-[2em] justify-center items-center'>
              {context.destinationNavigation && context.destinationNavigation.map(route => (
                <li key={route.page} 
                className={` flex uppercase items-center font-normal justify-center tracking-[0.125em] border-b-[0.1875em] gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-b-white 
                  ${context.hoverUnderlineColor === route.id ? 'border-b-white' : 'border-b-transparent'}`}>
                      <NavLink onClick={() => context.handleNavLinkHover(route.id)} 
                          className="flex gap-3 h-[32px] justify-self-center text-[0.875rem] font-barlowCondensed">
                          {route.page}
                      </NavLink>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default DestinationNavLinks