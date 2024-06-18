import React from 'react';
import skills from '../skills/skills';

const Exp = () => {
    return (
        <div className='text-background font-Lora text-4xl text-center'>
            Experience section
            {skills.map((skill,index) => (
                <img src={skill.img} alt='array of tech skills' />
            ))}
        </div>
    );
}
 
export default Exp;

{navLinks.map((link, index) => (
    <li
        className="hover:text-primary"
        key={index}
        onClick={() => setNavbarOpen(false)}
    >
        <NavLink href={link.path} title={link.title} />
    </li>
    ))}