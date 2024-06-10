import dots from "../public/Dots3.png"

const About = () => {
    return (
        <>
            <article className="bg-primary font-Hind h-full overflow-hidden relative rounded-t-3xl ">
                <section>
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
                        </div>
                        <img src={dots} alt="dot pattern" className="w-full h-full md:h-auto md:aspect-auto mix-blend-overlay absolute left-0 bottom-0 rotate-180 opacity-40 md:opacity-25 object-center" />
                    </div>
                </section>
            </article>
        </>
    );
}
export default About;


