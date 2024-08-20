import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const MobileMenu = () => {
    const context = useContext(AppContext);

    return (
        <Transition
          show={context.toggleMobileMenu}
          enter="transition-transform duration-700 ease-in-out"
          enterFrom="transform translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition-transform duration-700 ease-in-out"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform translate-x-full opacity-0"
          >
            <div className={`flex-col w-[254px] h-full right-0 top-0 absolute no-scrollbar md:hidden 
              ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }
               text-white backdrop-blur-xl z-40 bg-white/5`}>
                <ul className='h-full w-full flex flex-col gap-[2em]'>
                    <li className='h-[88px] lg:h-[96px] flex justify-end items-center pr-[1.5em]'>
                        <button aria-expanded={context.toggleMobileMenu}  onClick={context.handleToggleMobileMenu}>
                            <img className='w-[24px]' src={`/assets/icon-close.svg`} alt="menu icon" />
                        </button>
                    </li>
                    {context.navigation && context.navigation.map(route => (
                        <li key={route.id} className={`pl-[2em] flex uppercase tracking-[0.125em] border-r-4 gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-r-white 
                            ${context.hoverUnderlineColor === route.id ? 'border-r-white' : 'border-r-transparent'}`}>
                            <NavLink to={`/${route.path}`} onClick={() => context.handleNavLinkClick(route.id)} 
                                className="flex gap-3 justify-self-center text-[1rem] font-barlowCondensed">
                                <span className='font-bold'>{route.order}</span>
                                {route.page}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </Transition>
    );
}

export default MobileMenu;
