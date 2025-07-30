import React from 'react';
import LuvImg from '../assets/Images/LoveprofImg.jpg'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <div className=' fixed top-0 right-0 left-0 bg-transparent  border-b-amber-900 z-50'>
                <div className='justify-between backdrop:blur-3xl'>
                {/* <div className='backdrop-blur-md bg-white/10 border-b border-orange-500 text-white px-6 py-4 justify-between fixed top-0 right-0 left-0'> */}
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
                            <ul className='flex border p-3 text-amber-950'>
                                <li className='px-3'><Link>Home</Link></li>
                                <li className='px-3'><Link>Projects</Link></li>
                                <li className='px-3'><Link>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Navbar