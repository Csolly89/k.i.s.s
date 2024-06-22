import React from 'react';

import html from "../public/Html.png"
import css from "../public/Css.png"
import Js from "../public/Js.png"
import Sql from "../public/Sql.png"
import python from "../public/python.png"
import mongo from "../public/Mongo.png"
import node from "../public/Node.png"
import Reactlogo from "../public/React.png"
import Next from "../public/next-js.png"
import Tailwind from "../public/Tailwind.png"
import VsCode from "../public/Vscode.png"

// import version..
const skills = [
    {
        title: "html",
        img: html,
    },
    {
        title: "css",
        img: css,
    },
    {
        title: "Js",
        img: Js,
    },
    {
        title: "Sql",
        img: Sql,
    },
    {
        title: "python",
        img: python,
    },
    {
        title: "React",
        img: Reactlogo,
    },
    {
        title: "Next.js",
        img: Next,
    },
    {
        title: "Tailwind",
        img: Tailwind,
    },

]

const tools = [
    {
        title: "mongo",
        img: mongo,
    },
    {
        title: "node",
        img: node,
    },
    {
        title: "VsCode",
        img: VsCode
    },
]

const Exp = () => {
    return (
        <>
            <div className='text-text bg-gradient-to-b from-primary to-secondary w-full h-[80vh]'>
                <h1 className='text-text font-Lora text-4xl text-center pt-10'>My Services</h1>
                {/* container */}
                <div className='flex flex-col md:flex-row justify-center items-center h-full pb-[10em] gap-10'>
                    {/* box */}
                    <div className='border-2 border-primary w-[18vw] min-h-[40vh] rounded-xl p-2 shadow-lg shadow-background hover:mb-10 hover:scale-105 transition-transform ease-linear'>
                        <h2 className='font-Lora text-xl mt-2 text-center'>Ui/Ux Design</h2>
                        <p className='flex text-left text-sm leading-5 mt-3'> UI/UX design as a service involves creating user interfaces (UI) and user experiences (UX) that are intuitive, efficient, and aesthetically pleasing. This service focuses on understanding user needs and behaviors to design digital products that are easy to navigate and visually engaging. It includes research, wireframing, prototyping, and testing to ensure that the final product not only looks good but also provides a seamless and satisfying experience for users. By prioritizing usability and user satisfaction, UI/UX design as a service helps businesses build products that effectively meet their goals and enhance customer engagement.</p>
                    </div>
                    <div className='border-2 border-primary w-[18vw] h-[45vh] rounded-xl p-2 shadow-lg shadow-background hover:mb-10 hover:scale-105 transition-transform ease-linear'>
                        <h2 className='font-Lora text-xl mt-2 text-center'>Web Development</h2>
                        <p className='flex text-left text-sm leading-6 mt-3'>Elevate your online presence with my top-tier web development services! I specialize in creating stunning, high-performance websites tailored to your unique business needs. From initial design and development to deployment and maintenance, I ensure every aspect of your website aligns perfectly with your vision. Imagine a website that not only looks amazing but also provides a seamless user experience, driving engagement and conversions. With my web development services, you'll benefit from cutting-edge technologies, robust functionality, and the flexibility to scale. Let's build a powerful online platform that sets you apart and propels your business to new heights!</p>
                    </div>
                    <div className='border-2 border-primary w-[18vw] h-[40vh] rounded-xl p-2 shadow-lg shadow-background hover:mb-10 hover:scale-105 transition-transform ease-linear'>
                        <h2 className='font-Lora text-xl mt-2 text-center'>App Development</h2>
                        <p className='flex text-left text-sm leading-5 mt-3'>Unlock the full potential of your business with our customized app development services! We specialize in crafting bespoke software applications tailored specifically to your unique needs and objectives. From initial concept and design to coding, testing, and deployment, our expert team ensures every detail aligns perfectly with your vision. Imagine having a powerful, personalized app that seamlessly integrates with your existing systems, boosts operational efficiency, and delights your users. With our customized app development, you'll gain a competitive edge, increased scalability, and the flexibility to grow. Let's transform your ideas into reality and drive your business forward!</p>
                    </div>
                </div>
                <div>

                    <ul className='flex flex-row items-center'>
                        {skills.map((skill, i) => (
                            <li className=''>
                                <img className='w-[3em] aspect-auto' src={skill.img} alt='array of tech skills' />
                            </li>
                        ))}
                    </ul>
                    <ul className='flex flex-row items-center'>
                        {tools.map((tool, i) => (
                            <li className=''>
                                <img className='w-[2em] aspect-auto' src={tool.img} alt='array of tech skills' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Exp;
