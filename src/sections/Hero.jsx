import React from 'react';
import Hulk from "../public/HulkProfile.png"
import LI from "../public/LinkedIn_Logo.svg.png"
import GH from "../public/Github.png"

const social = [
    {
        path: "https://www.linkedin.com/in/c-jay-solly-16908a284/",
        pic: LI ,
        alt: "Logo for LinkedIn",
    },
    {
        path: "https://github.com/Csolly89",
        pic: GH ,
        alt: "Logo for Github"
    }
]

// className="text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-800 to-green-500"

const Hero = () => {
    return (
        <section className='h-[100svh] bg-background'>
        {/* first container with Header and buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-12 mt-8 ">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='font-Alex lg:text-[20rem] text-[16rem] text-text hero relative z-10'> Solly</h1>
                <p className=" text-secondary text-base mg-6 sm:text-lg lg:text-xl">
                    I am a Jr Developer looking to make my mark with Responsive and Fun designs across the industry and internet!
                </p>
                <div>
                <ul className='flex flex-row justify-center gap-10'>
            {social.map((item, i) => (
                <a className="" key={i} to={item.path} target="_blank" rel="noopener noreferrer">
                    <img className='aspect-auto h-10' src={item.pic} alt={item.alt} />
                </a>
            ))
            }
        </ul>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-black via-green-800 to-green-500 hover:bg-slate-800 text-white mt-3 ">
                        <span className="block bg-[#051113] hover:bg-slate-900 rounded-full px-5 py-2">
                            Download Cv
                        </span>
                    </button>
                </div>
            </div>
            {/* 2nd container with Logo/img  */}
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <img className='bg-gradient-to-t from-black via-slate-900 to-transparent rounded-b-3xl ml-5 aspect-auto h-[30vh] md:h-[70vh]' src={Hulk} alt="Hulk figure with arms crossed" />
            </div>
        </div>
    </section>
    );
}



export default Hero;

// <div className='bg-background h-[100vh] w-full '>
//             <header className=''>
//                 <h1 className='font-Alex lg:text-[20rem] text-[16rem] text-text hero relative z-10'> Solly</h1>
//                 <img className='relative bottom-[17rem] bg-gradient-to-t from-black via-slate-900 to-transparent rounded-b-3xl ml-5 aspect-auto h-[50vh] md:h-[80vh]' src={Hulk} alt="Hulk figure with arms crossed" />

//             </header>
//                 <button className='rounded-3xl w-20'>Resume</button>
//                 <ul className='flex flex-row justify-center gap-10'>
//                 {social.map((item, i) => (
//                     <a className="" key={i} to={item.path} target="_blank" rel="noopener noreferrer">
//                         <img className='w-full h-20' src={item.pic} alt={item.alt} />
//                     </a>
//                 ))
//                 }
//             </ul>
//             {/* add resume download button along with social icons / links */}
//         </div>