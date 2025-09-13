import React, { useState } from 'react';
import LuvImg from '../assets/Images/LoveprofImg.jpg'
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);
    return (
        <>
            <div className=' fixed top-0 right-0 left-0 '>
                {/* <div className='justify-between'> */}
                <div className=' justify-between '>
                    <div className='flex flex-row py-4 px-4 justify-between items-center '>
                        <div className='flex font-extrabold font-sans text-2xl animate-pulse'>
                            <h1 className='underline decoration-wavy decoration-amber-900 text-orange-900'>L</h1>
                            <h1 className='underline decoration-wavy decoration-amber-800 text-orange-500'>O</h1>
                            <h1 className='underline decoration-wavy decoration-amber-700 text-amber-600'>V</h1>
                            <h1 className='underline decoration-wavy decoration-amber-600 text-amber-800'>E</h1>
                            <h1 className='underline decoration-wavy decoration-amber-500 text-amber-900'>Y</h1>
                        </div>
                        {/* <img className=' block w-30 h-30 rounded-full'  src={LuvImg} alt="" /> */}
                        <div className='pace-y-2 z-50'>
                            {/* <Link>Contact me</Link> */}
                            <button onClick={toggleMenu} className="md:hidden">
                                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />
                                }
                            </button>
                            <ul className=' hidden md:flex  p-3 text-amber-900 font-bold '>
                                <li className='px-3'><Link to='/'>Home</Link></li>
                                <li className='px-3'><Link to='/projects'>Projects</Link></li>
                                <li className='px-3'><Link to='/contactme'>Contact</Link></li>
                                {/* Mobile Menu */}
                                {
                                    open && (
                                        <div className="md:hidden  sm:block bg-white/20 backdrop-blur-md text-white px-6 py-4 space-y-3">
                                            <a href="#" className="block">Home</a>
                                            <a href="#" className="block">Project</a>
                                            <a href="/contactme" className="block">Contact</a>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Navbar