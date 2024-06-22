function Modal({closeModal}) {
    const handleClose = () => {
        closeModal()
    }
    return (
        <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
            <div className="bg-primary p-2 rounded-t-md rounded-b-3xl flex flex-col md:w-[40%] w-full">
                <p className="font-Chivo px-5 text-center text-background">
                    I’m an outgoing individual who thrives on making connections and am a dedicated football and Denver Broncos enthusiast. My passion for the game led me to play semi-pro football as a left tackle for the past seven years.
                </p>
                <p className="font-Chivo px-5 text-center text-background mt-3">
                    I have a wide range of interests, including Star Wars, the Monsterverse, Marvel Comics, and movies, and I appreciate a great steak. Honesty, fun, and the occasional Arnold Schwarzenegger impersonation are important to me.
                </p>
                <p className="font-Chivo px-5 text-center text-background mt-3">
                    Currently, I work as an independent contractor for CodeNurturers LLC, and I’m keen on collaborating on design and development projects. Looking forward to connecting with you. Have a fantastic day!
                </p>    
            </div>
        </div>
    );
}

export default Modal;