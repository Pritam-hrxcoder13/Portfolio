import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import Github from "../assets/github.png"
import ReactJs from "../assets/react.png"
import Mongo from "../assets/mongo.png"
import Tailwindcss from "../assets/tailwind.png"
import Nodejs from "../assets/node.png"
const Skill = () => {
    return (
        <div name="skills" className='w-full md:h-screen bg-[#0a192f] text-gray-300 '>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ffae4ae3]'>Skills</p>
                    <p className='py-4'>These are technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={HTML} alt="HTML icon" className='w-20 mx-auto' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={CSS} alt="CSS icon" className='w-20 mx-auto' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Javascript} alt="Javascript icon" className='w-20 mx-auto' />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Nodejs} alt="Nodejs icon" className='w-20 mx-auto' />
                        <p className='my-4'>Node Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={ReactJs} alt="React js icon" className='w-20 mx-auto' />
                        <p className='my-4'>React Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Tailwindcss} alt="Tailwindcss icon" className='w-20 mx-auto' />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Mongo} alt="Mongo icon" className='w-20 mx-auto' />
                        <p className='my-4'>Mongo DB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Github} alt="Github icon" className='w-20 mx-auto' />
                        <p className='my-4'>Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill