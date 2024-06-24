import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    // env variable for keys here
        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_ID}`,
                `${process.env.REACT_APP_TEMPLATE_ID}`, 
                form.current, {
                    publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
            })
            .then(
            () => {
                console.log('SUCCESS!');
                // e.target.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };
    
    return (
        <>
            <div className="bg-gradient-to-b from-background to-secondary text-text">
                <div  className="px-4 mx-auto sm:px-6 lg:px-8 mt-10 pb-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="leading-tight text-text text-5xl">Lets get in touch!</h2>
                    </div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 ">
                            <form ref={form} onSubmit={sendEmail} className="lg:col-span-3 lg:col-start-2">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-2xl text-center">Send me a message</h3>
                                    {/* action="#" */}
                                    <div  className="mt-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label className="text-xl"> Your name </label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text"  name="user_name"  className="block w-full px-4 py-4 text-text transition-all duration-200 border border-primary rounded-md bg-slate-100 bg-opacity-10 focus:outline-none focus:border-primary caret-accent" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-xl"> Your email </label>
                                                <div className="mt-2.5 relative">
                                                    <input type="email" name="user_email" className="block w-full px-4 py-4 text-text transition-all duration-200 border border-primary rounded-md bg-slate-100 bg-opacity-10 focus:outline-none focus:border-primary caret-accent" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label className="text-xl"> Message </label>
                                                <div className="mt-2.5 relative">
                                                    <textarea
                                                        name="message"
                                                        className="block w-full px-4 py-4 text-text transition-all duration-200 border border-primary rounded-md bg-slate-100 bg-opacity-10 focus:outline-none focus:border-primary caret-accent" 
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <input type="submit" value="Send" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base text-background bg-primary border border-transparent rounded-md focus:outline-none hover:bg-accent"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;