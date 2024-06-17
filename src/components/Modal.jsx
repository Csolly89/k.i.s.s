function Modal({closeModal}) {
    return (
        <div className="flex ">
            <div className="fixed flex z-20 top-[30%] h-[25%] w-[60%] rounded-xl bg-stone-800 justify-center items-center">
                <p className="font-Chivo px-5 text-center text-text">
                    I'm outgoing, love making connections, and a diehard footbal & Denver Broncos fan (so much so that I have played semi-pro football for the last 7 years as an left tackle). My interests encompass Star Wars, the Monsterverse, Marvel Comics, movies, and enjoying a great steak.  I believe in being honest, having fun, and occasionally impersonating Arnold Schwarzenegger.
                    I am currently an independent contractor for CodeNurturers LLC and am interested in connecting with you for any design or development work. Hope you have a wonderful day!
                </p>
            <button
            onClick={closeModal}
            className="text-center px-3 py-2 border bg-primary text-background rounded-xl mr-2 mb-2"
            >
                <p className="text-sm">close</p>
            </button>
            </div>
        </div>
    );
}

export default Modal;