import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleToggelNav = () => {
        setNav(!nav)
    }
    console.log("gweukfwuk>>", process.env.REACT_APP_API_URL)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Pritam Manna" width={100} />
            </div>
            {/* menue */}

            <ul className='md:flex hidden '>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleToggelNav} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menue */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300"}>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleToggelNav} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleToggelNav} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleToggelNav} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleToggelNav} to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleToggelNav} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
            {/* social links */}
            <div className='hidden lg:flex  fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="https://www.linkedin.com/in/pritam-manna-24a460203/" target='blank' className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/Pritam-hub-13" target='blank' className='flex justify-between items-center w-full text-gray-300'>GitHub <FaGithub size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="mailto:pritammanna814@gmail.com" className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href={`${process.env.REACT_APP_API_URL}/Pritam_Manna.pdf`} download="resume.pdf" >Resume <BsFillPersonLinesFill size={30} /> </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar