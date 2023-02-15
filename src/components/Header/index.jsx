import { useState } from 'react';
import longlogo from '../../assets/logos/long-light-logo.svg';
import './styles.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <nav className='bg-slate-700 px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='/' className='flex items-center'>
          <img src={longlogo} className='h-8 md:h-10 lg:h-14' alt='Text Logo' />
        </a>
        {/* HAMBURGER NAV BAR ON SMALL SCREEN */}
        <section className='flex md:hidden lg:hidden'>
          {/* hamburger icon */}
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => setIsBurgerOpen((prev) => !prev)}>
            <span className='sr-only'>Open main menu</span>
            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
          </button>

          <div className={isBurgerOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              //  X to close Burger
              className='absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsBurgerOpen(false)}>
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>

            <ul className='flex flex-col items-center justify-between min-h-[200px]'>
              <li className='border-b border-gray-400 my-4 uppercase'>
                <Link to='/'>Home</Link>
              </li>
              <li className='border-b border-gray-400 my-4 uppercase'>
                <HashLink to='#about'>About</HashLink>
              </li>
              <li className='border-b border-gray-400 my-4 uppercase'>
                <HashLink to='#reviews' className='text-gray-600'>Reviews</HashLink>
              </li>
              {/* <li className='border-b border-gray-400 my-4 uppercase'>
              <HashLink to='#photoGallery'>Gallery</HashLink>
              </li> */}
              <li className='border-b border-gray-400 my-4 uppercase'>
                <Link to='/contact' className='text-gray-600'>Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* NAV BAR ON MD & LG SCREENS */}
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-700'>
            <li>
            <Link to='/' className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 '>Home</Link>
            </li>
            <li>
            <HashLink to='#about' className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 '>About</HashLink>
            </li>
            <li>
              <HashLink to='#reviews' className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 '>Reviews</HashLink>
            </li>
            {/* <li>
            <HashLink to='#photoGallery' className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 '>Gallery</HashLink>
            </li> */}
            <li>
              <Link to='/contact' className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 '>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
