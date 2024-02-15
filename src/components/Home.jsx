import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ffae4ae3]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Pritam Manna</h1>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur excepturi iste debitis recusandae perspiciatis, aliquam atque quaerat, earum optio ratione iure provident labore enim id minima nesciunt sapiente dolore.
                    Dolorem sint reprehenderit quod.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffae4ae3] hover:border-[#ffae4ae3]'>View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-4' /></span></button>
                </div>
            </div>
        </div>
    )
}

export default Home