import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                {/* container */}
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#f18d13e3]'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi. I'm Pritam, nice to meet you. Please take a look around.
                        </p>
                    </div>
                    <div>
                        <p>I'm passionate about transforming ideas into dynamic web solutions. With proficiency across the entire development spectrum, I specialize in creating engaging user interfaces and optimizing backend functionality. My approach combines innovation, attention to detail, and effective collaboration, making every project an opportunity to build something remarkable. Let's turn your digital vision into reality!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About