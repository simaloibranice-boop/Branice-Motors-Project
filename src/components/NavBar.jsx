import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-centered">
            <h1 className="text-3xl font-bold">
                BRANICE & MOTORS
            </h1>
            <ul className="flex space-x-6">
              <li><Link to='/' className='hover:text-yellow-500'>Home</Link></li>
              <li><Link to='/about' className='hover:text-yellow-500'>About</Link></li>
              <li><Link to='/parts' className='hover:text-yellow-500'>Parts</Link></li>
              <li><Link to='/login' className='hover:text-yellow-500'>Login</Link></li>
              <li><Link to='/dealers' className='hover:text-yellow-500'>Dealers</Link></li>
            </ul>

        </nav>
    );
}

export default NavBar;