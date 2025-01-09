import React from 'react'
import { contact } from '../GlobalApi/Index';
import { useState, useEffect } from 'react';
const Contact = () => {
    let [data, setData] = useState([{
        message: "",
        name: "",
        email: ""
    }])
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isAlertExiting, setIsAlertExiting] = useState(false);
    //To get the value
    const handleChange = (value, type) => {
        setData((prev) => {
            let updatedata = [...prev]; // Create a shallow copy of the previous state
            updatedata[0] = { ...updatedata[0], [type]: value }; // Update the first element with the new key-value pair
            return updatedata; // Return the updated state
        });
    }
    console.log("data>>", data);

    //To submit the message
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await contact(data[0]);
            let res = response.data;
            if (res.status) {
                setData([{
                    message: "",
                    name: "",
                    email: ""
                }]);
                // Show the alert when the form is submitted
                setIsAlertVisible(true);

                // Hide the alert after 3 seconds
                setTimeout(() => {
                    setIsAlertExiting(true);
                    setTimeout(() => {
                        setIsAlertVisible(false);
                        setIsAlertExiting(false);
                    }, 500); // Wait for the slide down animation to finish
                }, 3000);
            }
        } catch (err) {

        }
    }
    useEffect(() => {
        if (isAlertVisible) {
            // If alert becomes visible, reset exiting animation
            setIsAlertExiting(false);
        }
    }, [isAlertVisible]);
    return (
        <div name="contact" className='w-full h-full  bg-[#0a192f] flex justify-center items-center p-20'>
            <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f18d13e3] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the below form or shoot me an email - pritamanna814@gmail.com</p>

                </div>
                <input value={data[0].name} type="text" placeholder='Name' name='name' className='bg-[#ccdcf6] p-2 outline-none rounded-sm' required onChange={(e) => {
                    handleChange(e.target.value, "name");
                }} />
                <input value={data[0].email} type="email" placeholder='Email' name='email' className='bg-[#ccdcf6] p-2 my-4 outline-none rounded-sm' required onChange={(e) => {
                    handleChange(e.target.value, "email");
                }} />
                <textarea value={data[0].message} name="message" className='bg-[#ccdcf6] p-2 outline-none rounded-sm' placeholder='Message' rows="10" required onChange={(e) => {
                    handleChange(e.target.value, "message");
                }} />
                <button className='text-white group border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#ffae4ae3] hover:border-[#ffae4ae3]'>Let's Collaborate</button>
            </form>
            {isAlertVisible && (
                <div
                    className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-md shadow-lg transition-all duration-500 ease-in-out ${isAlertExiting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 text-green-700 mr-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 4.293a1 1 0 010 1.414L8 14.414 3.293 9.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-semibold">Success!</span>
                        </div>
                        <button
                            onClick={() => {
                                setIsAlertExiting(true);
                                setTimeout(() => {
                                    setIsAlertVisible(false);
                                    setIsAlertExiting(false);
                                }, 500); // Wait for the slide down animation to finish
                            }}
                            className="text-green-700 hover:text-green-900 focus:outline-none"
                        >
                            ×
                        </button>
                    </div>
                    <p className="mt-2">Your message has been delivered successfully.</p>
                </div>
            )}
        </div>
    )
}

export default Contact