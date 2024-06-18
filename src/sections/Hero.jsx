import React from 'react';
import Hulk from "../public/HulkProfile.png"
import LI from "../public/LinkedIn_Logo.svg.png"
import GH from "../public/Github.png"

const social = [
    {
        path: "https://www.linkedin.com/in/c-jay-solly-16908a284/",
        pic: LI,
        alt: "Logo for LinkedIn",
    },
    {
        path: "https://github.com/Csolly89",
        pic: GH,
        alt: "Logo for Github"
    }
]

// className="text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-800 to-green-500"

const Hero = () => {
    return (
        <section className='h-[100svh] bg-background '>
            {/* first container with Header and buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-12 mt-8 ">
                <div className="col-span-7 place-self-center text-center sm:text-left mt-10">
                    <h1 className='font-Alex xl:text-[25rem] md:text-[18rem] text-[10rem] hero relative xl:ml-[46%] xl:pb-[.2em] z-10 text-text'> Solly</h1>
                    <div className='relative xl:bottom-[20em]'>
                        <div className='relative top-[12vh] xl:top-0 lg:ml-12'>
                            <h2 className='font-Alex text-8xl text-primary relative'>Welcome</h2>
                            <p className=" text-secondary font-Hind relative text-center xl:text-3xl md:text-5xl xl:mr-20">
                                I am a Jr Developer looking to make my mark with Responsive and Fun designs across the industry and internet!
                            </p>
                        </div>
                        <div className='flex md:flex-row flex-col xl:justify-end gap-4 justify-center relative top-[10rem] lg:top-5 xl:mr-[10em] '>
                            <ul className='flex flex-row gap-5 justify-center'>
                                {social.map((item, i) => (
                                    <a className="" key={i} to={item.path} target="_blank" rel="noopener noreferrer">
                                        <img className='aspect-auto h-10' src={item.pic} alt={item.alt} />
                                    </a>
                                ))
                                }
                            </ul>
                            <button className="rounded-3xl bg-gradient-to-tr from-secondary to-primary p-2 border-2 border-text border-opacity-0">
                                <span className="text-background">
                                    Download Cv
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 2nd container with Logo/img  */}
                <div className="xl:col-span-5 md:col-span-3 col-span-1 place-self-center xl:pr-[15%]  xl:pt-10 relative bottom-[32em] md:bottom-0 ">
                    <div className="rounded-full bg-gradient-to-br from-background to-secondary w-[80vw] lg:w-[60vw] xl:w-[45vw] relative mt-">
                    <img className='bg-gradient-to-t from-black via-slate-900 to-transparent rounded-b-3xl aspect-auto ' src={Hulk} alt="Hulk figure with arms crossed" />
					</div>
                </div>
            </div>
        </section>
    );
}



export default Hero;
