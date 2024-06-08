

import React from 'react'
import NavLink from './Navlink';


const Mobile = ({ links }) => {

    return (
        <div>
            <ul className="text-background h-[calc(100vh-3.5rem)] w-full flex flex-col gap-5 items-center justify-center text-3xl z-10 bg-text md:hidden ">
                {links.map((link, index) => (
                    <li className='hover:text-accent' key={index} onClick={() => setNavbarOpen(false)}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Mobile;
