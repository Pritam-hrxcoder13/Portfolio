import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#f18d13e3]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Pritam Manna</h1>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>a passionate Full Stack Developer dedicated to crafting seamless digital experiences. I thrive on turning concepts into reality. Let's build something extraordinary together!</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f18d13e3] hover:border-[#f18d13e3]'><Link to="work" smooth={true} duration={500}>View Work</Link> <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-4' /></span> </button>
                </div>
            </div>
        </div>
    )
}

export default Home