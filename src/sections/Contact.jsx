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
            <div className="mb-12 ">
                <div  className="px-4 mx-auto sm:px-6 lg:px-8 mt-20">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="leading-tight text-white text-5xl">Lets get in touch!</h2>
                    </div>

                    <div className="max-w-6xl mx-auto mt-5 overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-500  rounded-md shadow-md lg:mt-8 ">
                        <div className="grid grid-cols-1 lg:grid-cols-5 ">
                            <form ref={form} onSubmit={sendEmail} className="lg:col-span-3 lg:col-start-2">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-5xl text-center">Send me a message</h3>
                                    {/* action="#" */}
                                    <div  className="mt-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label className="text-2xl"> Your name </label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text"  name="user_name"  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-2xl"> Your email </label>
                                                <div className="mt-2.5 relative">
                                                    <input type="email" name="user_email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label className="text-2xl"> Message </label>
                                                <div className="mt-2.5 relative">
                                                    <textarea
                                                        name="message"
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <input type="submit" value="Send" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base text-white bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;