function Modal({closeModal}) {
    const handleClose = () => {
        closeModal()
    }
    return (
        <div onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
            <div className="bg-primary p-2 rounded-t-md rounded-b-3xl flex md:w-[40%] w-full">
                <p className="font-Chivo px-5 text-center text-background">
                    I'm outgoing, love making connections, and a diehard footbal & Denver Broncos fan (so much so that I have played semi-pro football for the last 7 years as a left tackle). My interests encompass Star Wars, the Monsterverse, Marvel Comics, movies, and enjoying a great steak.  I believe in being honest, having fun, and occasionally impersonating Arnold Schwarzenegger.
                    I am currently an independent contractor for CodeNurturers LLC and am interested in connecting with you for any design or development work. Hope you have a wonderful day!
                </p>
            </div>
        </div>
    );
}

export default Modal;