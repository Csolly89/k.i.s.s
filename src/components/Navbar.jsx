import React, { useState } from "react";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: "Bio/About",
        path: "#about",
    },
    {
        title: "Services",
        path: "#exp",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-10 rounded-bl-lg rounded-br-lg text-background ">
            <div className="flex flex-wrap items-center justify-between h-14 bg-gradient-to-tr from-background to-secondary border-b-2 border-primary rounded-br-2xl rounded-bl-2xl">
                <a
                    href={"/"}
                    className="text-5xl text-text hover:text-primary pl-3 font-Alex"
                >
                    <h1>Solly.Dev</h1>
                </a>
                {/* main navbar links */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex flex-row mr-5 justify-between gap-2 ">
                    {navLinks.map((link, index) => (
                        <li
                        className="text-text hover:text-primary font-Lora lg:text-2xl md:text-lg "
                        key={index}
                        >
                        <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="mobile-menu block md:hidden mr-5">
                    {!navbarOpen ? (
                    <button
                        onClick={() => setNavbarOpen(true)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                    ) : (
                    <button
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                    )}
                </div>
            </div>
            <div className="transition ease-in-out">
            {navbarOpen ? (
                <div className="absolute right-0 flex justify-end before:bg-gradient-to-r before:from-transparent before:to-secondary before:w-[35dvw] before:opacity-50 ">
                <ul className="text-text h-[calc(100vh-3.5rem)] w-80 flex flex-col gap-5 justify-center items-center text-3xl z-10 bg-background md:hidden ">
                    {navLinks.map((link, index) => (
                    <li
                        className="hover:text-primary"
                        key={index}
                        onClick={() => setNavbarOpen(false)}
                    >
                        <NavLink href={link.path} title={link.title} />
                    </li>
                    ))}
                </ul>
                </div>
            ) : null}
            </div>
        </nav>
        </>
    );
};
export default Navbar;
