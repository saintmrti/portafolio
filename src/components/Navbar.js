import React from "react";
import Logo from "../assets/logo.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

  return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
          <div>
              <img src={Logo} alt="logo" style={{width: '70px'}}/>
          </div>

          {/* menu */}
          <ul className="hidden md:flex">
            <li className="hover:text-pink-600"><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className="hover:text-pink-600"><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className="hover:text-pink-600"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className="hover:text-pink-600"><Link to="work" smooth={true} duration={500}>Work</Link></li>
            <li className="hover:text-pink-600"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>

          {/* hamburger */}
          <div onClick={handleClick} className="md:hidden z-10">
              {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* mobile menu */}
          <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
              <li className='py-6 text-4xl hover:text-pink-600'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
              <li className='py-6 text-4xl hover:text-pink-600'>
                  {' '}
                  <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                      About
                  </Link>
              </li>
              <li className='py-6 text-4xl hover:text-pink-600'>
                  {' '}
                  <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                      Skills
                  </Link>
              </li>
              <li className='py-6 text-4xl hover:text-pink-600'>
                  {' '}
                  <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                      Work
                  </Link>
              </li>
              <li className='py-6 text-4xl hover:text-pink-600'>
                  {' '}
                  <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                      Contact
                  </Link>
              </li>
          </ul>
          {/* social icons */}
          <div className="lg:flex flex fixed flex-col top-[35%] left-0">
              <ul>
                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
                      <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/saintmartin/" target="_blank" rel="noreferrer">
                          LinkedIn <FaLinkedin size={30}/>
                      </a>
                  </li>
                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                      <a className="flex justify-between items-center w-full text-gray-300" href="/">
                          Mail <FaMailBulk size={30}/>
                      </a>
                  </li>
                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                      <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/saintmrti" target="_blank" rel="noreferrer">
                          GitHub <FaGithub size={30}/>
                      </a>
                  </li>
                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
                      <a className="flex justify-between items-center w-full text-gray-300" href="https://wa.me/2288548416" target="_blank" rel="noreferrer">
                          WhatsApp <FaWhatsapp size={30}/>
                      </a>
                  </li>
                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                      <a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1Z5XvwB-8H208EO6T168EGyeLNNN3dGrj/view?usp=sharing" target="_blank" rel="noreferrer">
                          Curriculum <BsFillPersonLinesFill size={30}/>
                      </a>
                  </li>
              </ul>
          </div>


      </div>
  );
}

export default Navbar