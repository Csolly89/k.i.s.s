import { useState } from "react"
import Modal from "../components/Modal"
import Profile from "../public/Hulk2.jpg"

const About = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <>
            <section className="min-h-[30svh] bg-primary rounded-t-3xl ">
                <div className="grid lg:grid-cols-12 grid-cols-1 h-full">
                    <div className="col-span-4 col-start-2 flex items-center">
                        <div className="">
                            {/* Insert Img here */}
                            <img className="w-[20rem] aspect-auto rounded-bl-xl rounded-tr-2xl mr-3 mt-2 shadow-lg shadow-background" src={Profile} alt="hulk placeholder" />
                        </div>
                    </div>
                    <div className="col-span-6 md:text-center text-left place-self-center pb-[4em] m-5">
                        <div>
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-secondary to-accent font-Lora text-4xl sm:text-5xl lg:text-6xl text-start">
                                Well Hello There
                            </h1>
                            <p className="bg-clip-text bg-gradient-to-tr from-secondary to-accent text-transparent drop-shadow-md shadow-black font-Hind text-xl">
                                My name is Christopher Solly but I prefer to go by C-jay. I am currently seeking a career change from Butchery and Retail management to jump into the world of Web Design and Software Development!
                            </p>
                            <div className="flex justify-end relative top-10">
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="rounded-3xl bg-gradient-to-tr from-secondary to-primary p-2 border-2 border-text border-opacity-0 m-3 w-full md:w-auto">
                                    <span className="text-background font-Hind">
                                        <h2>More About me</h2>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {modalOpen ? (
                    <div className="transition ease-in-out mx-[20%]">
                        <Modal closeModal={() => setModalOpen(false)} />
                    </div>
                ) : null}
            </section>

        </>
    );
}
export default About;

