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
        title: "Html",
        img: html,
    },
    {
        title: "Css",
        img: css,
    },
    {
        title: "Javascript",
        img: Js,
    },
    {
        title: "Sql",
        img: Sql,
    },
    {
        title: "Python",
        img: python,
    },
    {
        title: "React.js",
        img: Reactlogo,
    },
    {
        title: "Next.js",
        img: Next,
    },
    {
        title: "TailwindCss",
        img: Tailwind,
    },

]

const tools = [
    {
        title: "MongoDB",
        img: mongo,
    },
    {
        title: "Node.js",
        img: node,
    },
    {
        title: "VsCode",
        img: VsCode
    },
]

const Exp = () => {
    return (
        <section>
            <div className='text-text bg-gradient-to-b from-primary to-secondary w-full '>
                <h1 className='text-secondary font-Lora text-4xl text-center'>My Services</h1>
                {/* container */}
                <div className='flex flex-col md:flex-row justify-center items-center xl:h-[70%] m-5 pb-[3em] gap-10'>
                    {/* box */}
                    <div className='border-2 border-primary xl:w-[18vw] w-auto bg-background  rounded-xl p-2 shadow-lg shadow-background hover:mb-10 hover:scale-105 transition-transform ease-linear'>
                        <h2 className='font-Lora text-xl mt-2 text-center'>Ui/Ux Design</h2>
                        <p className='flex text-left text-sm leading-5 mt-3 font-Hind'>I offer top-tier UI/UX design services that transform your digital products into intuitive, efficient, and visually captivating experiences. By deeply understanding user needs and behaviors, I create designs that are easy to navigate and engaging. My process includes thorough research, wireframing, prototyping, and rigorous testing, ensuring the final product not only looks outstanding but also provides a seamless user experience. Prioritizing usability and user satisfaction, my UI/UX design services help businesses achieve their goals and enhance customer engagement. Let’s work together to bring your vision to life.</p>
                    </div>
                    <div className='border-2 border-primary xl:w-[18vw] bg-background rounded-xl p-2 shadow-lg shadow-background hover:scale-105 transition-transform ease-linear'>
                        <h2 className='font-Lora text-xl mt-2 text-center'>Web Development</h2>
                        <p className='flex text-left text-sm xl:leading-6 mt-3 font-Hind'>Elevate your online presence with my top-tier web development services! I specialize in creating stunning, high-performance websites tailored to your unique business needs. From initial design and development to deployment and maintenance, I ensure every aspect of your website aligns perfectly with your vision. Imagine a website that not only looks amazing but also provides a seamless user experience, driving engagement and conversions. With my web development services, you'll benefit from cutting-edge technologies, robust functionality, and the flexibility to scale. Let's build a powerful online platform that sets you apart and propels your business to new heights!</p>
                    </div>
                    <div className='border-2 border-primary xl:w-[18vw] w-auto  bg-background rounded-xl p-2 shadow-lg shadow-background hover:mb-10 hover:scale-105 transition-transform ease-linear'>
                        <h2 className='font-Lora text-xl mt-2 text-center'>App Development</h2>
                        <p className='flex text-left text-sm leading-5 mt-3 font-Hind'>Unlock the full potential of your business with our customized app development services! We specialize in crafting bespoke software applications tailored specifically to your unique needs and objectives. From initial concept and design to coding, testing, and deployment, our expert team ensures every detail aligns perfectly with your vision. Imagine having a powerful, personalized app that seamlessly integrates with your existing systems, boosts operational efficiency, and delights your users. With our customized app development, you'll gain a competitive edge, increased scalability, and the flexibility to grow. Let's transform your ideas into reality and drive your business forward!</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center relative bottom-8 w-full'>
                <div className=''>
                    <h2 className='font-Lora text-2xl my-2 text-center'>Skilled Languages</h2>
                    <ul className='flex flex-col md:flex-row items-center md:items-baseline justify-center gap-2 xl:gap-[2em]'>
                        {skills.map((skill, i) => (
                            <li className=''>
                                <img className='w-[4.5rem] aspect-auto' src={skill.img} alt='array of tech skills' />
                                <h3 className='font-Hind text-center'>{skill.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <h2 className='font-Lora text-2xl my-2 pt-4 text-center'>Tools of the trade</h2>
                    <ul className='flex flex-row items-baseline justify-center gap-5'>
                        {tools.map((tool, i) => (
                            <li className=''>
                                <img className='w-[4em] aspect-auto' src={tool.img} alt='Icons of Tools I use' />
                                <h3 className='font-Hind text-center'>{tool.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Exp;
