import React from 'react'
import Navbar from './Navbar'
import myImg from '../assets/Images/LoveprofImg.jpg'
import myAvt from '../assets/Images/avatar.png'
import { Link } from 'react-router'
import Projects from './Projects'
import '../assets/Styles/sparkles.css'
import Confetti from './Confetti'


const Homepage = () => {

    return (
        <>
            <Navbar />
            <section className='relative bg-gradient-to-br from-indigo-200 via-amber-300 to-bg-amber-950 min-h-screen overflow-hidden pt-30'>
                <div className='z-40'>
                    <Confetti count={80}  />

                    <div className=' flex px-4 z-20 w-screen'>
                        <div className=" px-6 py-4 flex space-around items-center md:my-4 md:flex-row sm:flex-col ">
                            {/* <div className=' p-4 md:flex-2/4 md:my-4'> */}
                            {/* TEXT */}
                            <div className='text-xl justify-items-center rounded rounded-bl-4xl rounded-tr-4xl mx-auto origin-center rotate-10 bg-amber-100 md:py-6'>
                                <div><h1 className='md:text-3xl sm:text-xl'>Hi, it's Me!</h1></div>
                                <div><h1 className='md:font-extrabold sm:font-bold text-amber-950'>Love Adeniran</h1></div>
                                <div className='flex'>
                                    <h1 className='items-baseline pt-8 px-3'>I'm a</h1>
                                    <div className='text-amber-950 flex font-extrabold text-6xl p-3 animate-pulse'>
                                        <p className=' text-orange-900'>W</p>
                                        <p className=' text-amber-600'>e</p>
                                        <p className=' text-amber-900 pr-2'>b</p>
                                        <p> </p>
                                        <p className='  text-orange-900'>D</p>
                                        <p className=' text-orange-700'>e</p>
                                        <p className='  text-orange-500'>v</p>
                                        <p className='  text-orange-300'>e</p>
                                        <p className=' text-orange-900'>l</p>
                                        <p className='  text-amber-300'>o</p>
                                        <p className='  text-amber-500'>p</p>
                                        <p className='  text-amber-700'>e</p>
                                        <p className='  text-amber-900'>r</p>
                                    </div>
                                </div>
                                <div className=' flex p-2'><p className='pt-1 px-2'>Let me take you on a creative ride with </p>
                                    <div className=' flex font-extrabold text-3xl animate-initial'>
                                        <p className='underline decoration-wavy decoration-amber-900 text-orange-900'>D</p>
                                        <p className='underline decoration-wavy decoration-amber-900 text-amber-600'>e</p>
                                        <p className='underline decoration-wavy decoration-amber-900 text-amber-900 pr-2'>v</p>
                                        <p> </p>
                                        <p className=' text-orange-900'>L</p>
                                        <p className=' text-orange-700'>o</p>
                                        <p className=' text-orange-500'>v</p>
                                        <p className=' text-orange-300'>e</p>
                                        <p className=' text-orange-900'>y</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 my-2 py-3 flex justify-center mx-auto'>
                            <img className='w-100 h-100 hover:animate-bounce ease-in m-2 border border-amber-950 rounded-full' src={myImg} alt="" />
                            {/* <img src={myAvt} className='hover:animate-ping ease-in-out' alt="" /> */}
                        </div>
                    </div>
                </div>
                    <div className='justify-center flex z-40'>
                        <div className='p-2 '>
                            {/* <Link to={}/> */}
                        <Link to='/projects' className='border rounded py-2 px-4 text-amber-900 font-bold text-2xl cursor-pointer'>Let's Go</Link>
                        </div>
                    </div>
            </section>
            
            
        </>
    )
}

export default Homepage