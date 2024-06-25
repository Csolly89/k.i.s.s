import React, { useState } from "react";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

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

const Navbar = ({ change, dark }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-40 rounded-bl-lg rounded-br-lg text-background">
            <div className="flex items-center justify-between bg-gradient-to-tr from-background to-secondary border-b-2 border-primary rounded-b-2xl py-2">
                <a href={"/"} className="text-5xl text-text hover:text-primary pl-3 font-Alex">
                    <h1>Solly.Dev</h1>
                </a>
                {!dark ? (
                    <button
                        onClick={change}
                        className="flex items-center p-2 border rounded-full border-text text-text hover:text-primary hover:rounded-xl hover:border-primary xl:ml-[60vw] ml-[35vw]"
                    >
                        <SunIcon className="h-5 w-5" />
                    </button>
                    ) : (
                    <button
                        onClick={change}
                        className="flex items-center p-2 border rounded-full border-primary text-text hover:text-accent hover:rounded-xl hover:border-accent xl:ml-[60vw] ml-[30vw]"
                    >
                        <MoonIcon className="h-5 w-5" />
                    </button>
                    )}

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
                        className="flex items-center px-2 py-2 border rounded-xl border-primary text-text hover:text-accent hover:border-accent"
                    >
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                    ) : (
                    <button
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center px-2 py-2 border rounded-xl border-primary text-text hover:text-accent hover:border-accent"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                    )}
                </div>
            </div>
            <div className="transition ease-in-out">
            {navbarOpen ? (
                    <div className="absolute right-0 flex justify-end before:bg-gradient-to-r before:from-transparent before:to-secondary before:w-[35dvw] before:opacity-50 before:backdrop-blur-">
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
