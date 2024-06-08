import React, { useState } from 'react'
import Mobile from './Mobile';
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"


const navLinks = [
    {
        title: "Bio/About",
        path: "/about",
    },
    {
        title: "Experience",
        path: "/exp",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-10 rounded-bl-lg rounded-br-lg  text-background ">
                <div className='flex flex-wrap items-center justify-between h-14 bg-gradient-to-tr from-text to-secondary border-b-2 border-primary'>
                    <a href={'/'} className="text-3xl text-background hover:text-accent pl-3">
                        <h1>Solly.Dev</h1>
                    </a>
                    {/* main navbar links */}
                    <div className="menu hidden md:block md:w-auto" id="navbar">
                        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
                            {navLinks.map((link, index) => (
                                <li className='text-background hover:text-accent' key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="mobile-menu block md:hidden ">
                        {!navbarOpen
                            ? (<button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5" /></button>)
                            : (<button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5" /></button>)
                        }
                    </div>
                </div>
                <div className='transition ease-in-out'>
                    {navbarOpen ? <Mobile links={navLinks} /> : null}
                </div>
            </nav>
        </>
    );
}
export default Navbar;

