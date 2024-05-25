import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <div className='h-full w-full bg-gray-950 flex justify-center items-center p-2 text-gray-300 '>
            <footer>
                <p className='hidden pt-1 lg:inline-block'>&copy; 2024 Pritam Manna. All rights reserved. | Designed and developed by Pritam Manna</p>

                <div className='lg:hidden w-full h-full flex justify-center pt-1'>
                    <ul className='flex flex-row'>
                        <li >
                            <a href="https://www.linkedin.com/in/pritam-manna-24a460203/" target='blank' className='flex justify-between items-center w-full text-gray-300 flex-col'> <FaLinkedin size={30} color='#0077B5' /> <span className='pt-1 text-[#0077B5]'>Linkedin</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/Pritam-hrxcoder13" target='blank' className='flex justify-between items-center w-full text-gray-300 flex-col'> <FaGithub size={30} color='#6cc644' /> <span className='pt-1 text-[#6cc644]'>GitHub</span></a>
                        </li>
                        <li>
                            <a href="mailto:pritammanna814@gmail.com" className='flex justify-between items-center w-full text-gray-300 flex-col'> <HiOutlineMail size={30} color='EA4335' /><span className='pt-1 text-[#EA4335]'>Email</span> </a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center pt-2'>
                    <p className='inline-block pb-2 lg:hidden'>Designed and developed by Pritam Manna</p>
                    <p className='inline-block lg:hidden'>&copy; 2024 Pritam Manna. All rights reserved.</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer