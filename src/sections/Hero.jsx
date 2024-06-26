import React from 'react';
import Hulk from "../public/HulkProfile.png"
import LI from "../public/LinkedIn_Logo.svg.png"
import GH from "../public/Github.png"
import Thanos from "../public/Thanos.png"

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


const Hero = ({ dark }) => {
    return (
        <section className='h-[100svh] bg-background pinStripe'>
            {/* first container with Header and buttons */}
            <div className="grid grid-cols-1 md:grid-cols-12 mt-8 ">
                <div className="col-span-7 place-self-center text-center sm:text-left mt-10">
                    <h1 className='font-Alex xl:text-[25rem] md:text-[18rem] text-[10rem] hero relative z-10 text-accent md:text-text flex justify-end'> Solly</h1>
                    <div className='relative xl:bottom-[10rem]'>
                        <div className='relative top-[12em] xl:top-0 md:top-[10em] lg:ml-12'>
                            <h2 className='font-Alex text-8xl text-primary relative'>Welcome</h2>
                            <p className=" text-accent font-Hind relative text-center xl:text-3xl md:text-5xl xl:mr-20 mx-5 md:mx-0">
                                I am a Jr Developer looking to make my mark with Responsive and Fun designs across the industry and internet!
                            </p>
                            <div className='flex md:flex-row flex-col justify-end gap-4 relative z-10 top-[1] md:top-5 xl:mr-20'>
                                <ul className='flex flex-row gap-5 justify-center items-center'>
                                    {social.map((item, i) => (
                                        <li key={i}>
                                            <a href={item.path} target="_blank" rel="noopener noreferrer">
                                                <img className='aspect-auto w-[10rem] drop-shadow-lg hover:border-b-2 hover:border-b-accent' src={item.pic} alt={item.alt} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <button className="rounded-3xl bg-gradient-to-tr from-secondary to-primary p-2 border-2 border-text m-3 xl:mr-10 hover:border-primary">
                                    <span className="text-background font-Hind ">
                                        Download Cv
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd container with Logo/img  */}
                <div className="xl:col-span-5 lg:col-span-3 col-span-1 place-self-center xl:pr-[15%]  xl:pt-10 relative bottom-[34em] md:bottom-0 ">
                    <div className="rounded-full bg-gradient-to-br from-background to-secondary w-[80vw] md:w-[60vw] xl:w-[30vw] relative">
                        {!dark ? (<img className='bg-gradient-to-t from-black via-slate-900 to-transparent rounded-b-3xl aspect-auto ' src={Hulk} alt="Hulk figure with arms crossed" />) : (<img className='bg-gradient-to-t from-black via-slate-900 to-transparent rounded-b-3xl aspect-auto w-[40em]' src={Thanos} alt="Hulk figure with arms crossed" />) }
                    {/* <img className='bg-gradient-to-t from-black via-slate-900 to-transparent rounded-b-3xl aspect-auto ' src={Hulk} alt="Hulk figure with arms crossed" /> */}
					</div>
                </div>
            </div>
        </section>
    );
}



export default Hero;
