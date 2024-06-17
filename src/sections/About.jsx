import { useState } from "react"
import Modal from "../components/Modal"
import dots from "../public/Dots3.png"

const About = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <>
            <article className="bg-primary font-Hind h-full overflow-hidden relative rounded-t-3xl ">
                    <div className="">
                        <div className="">
                            <h1 className="font-Lora text-4xl px-4 underline decoration-2 md:pl-[1.5em] pl-10 pt-12 ">
                                Well hello there,
                            </h1>
                            <p className="font-Chivo text-[1.75rem] p-5 first-letter:text-8xl first-letter:float-start first-letter:text-secondary text-left z-10">
                                My name is Christopher Solly, but I perfer to go by C-Jay. I am a Web Designer and Front-End Developer. After working my way up in retail to Perishable/Meat Manager, I decided to pursue a career in Software Development. I completed a bootcamp through NC State University and ThriveDx in order to express my artistic flair in a more profitable and balanced career.
                            </p>
                            <p className="font-Chivo text-[1.75rem] px-5 text-left md:text-center pb-16 z-10">
                                I'm outgoing, love making connections, and a diehard footbal & Denver Broncos fan (so much so that I have played semi-pro football for the last 7 years as an left tackle). My interests encompass Star Wars, the Monsterverse, Marvel Comics, movies, and enjoying a great steak.  I believe in being honest, having fun, and occasionally impersonating Arnold Schwarzenegger.
                                I am currently an independent contractor for CodeNurturers LLC and am interested in connecting with you for any design or development work. Hope you have a wonderful day!
                            </p>
                        {/* modal button */}
                            <div className="flex rounded-xl w-full px-5 py-2.5 justify-end">
                                    <button
                                    onClick={() => setModalOpen(true)}
                                    className="flex items-center px-3 py-2 border-2 rounded-xl bg-background border-slate-200 text-slate-200 hover:text-white hover:border-white"
                                    >
                                        <h2>More About me</h2>
                                    </button>
                            </div>
                        </div>
                    </div>
                    {modalOpen ? (
                        <div className="transition ease-in-out mx-[20%]  ">
                                <Modal closeModal={()=> setModalOpen(false)} />
                        </div>
                    ) : null}
            {/* <img src={dots} alt="dot pattern" className="w-full h-full md:h-auto md:aspect-auto absolute left-0 bottom-0 rotate-180 opacity-5 md:opacity-5 object-center" /> */}
            </article>
        </>
    );
}
export default About;


