import React, { useEffect } from 'react'
import '../assets/Styles/sparkles.css'
import hirepro from '../assets/Images/HireProImg.png'
import Confetti from './Confetti'

const Projects = () => {
    
    
    
    return (
        <>
            <div className='relative py-20 bg-gradient-to-br from-blue-400 via-amber-500 to-amber-950 min-h-screen overflow-hidden'>
                <Confetti count={80} />
                <div className='flex md:flex-row sm:flex-col md:p-4 '>
                    <div className='card m-2 sm:w-full p-4 rounded-[50px] bg-[#e0e0e0] shadow-[22px_22px_69px_#b8b8b8,-22px_-22px_69px_#ffffff]'>
                        <a href="https://hire-pro.netlify.app/">
                            <div className='px-4'>
                                <img className='rounded-2xl' src={hirepro} alt="" />
                            </div>
                            <div>
                                <div><p className='font-extrabold text-xl'>HirePro</p></div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi ipsum quisquam dignissimos quos quis at fugiat aliquid deserunt officiis totam et incidunt error voluptate expedita distinctio, magni pariatur repellendus.</div>
                            </div>
                        </a>
                    </div>

                    <div className='card m-2  p-4 rounded-[50px] bg-[#e0e0e0] shadow-[22px_22px_69px_#b8b8b8,-22px_-22px_69px_#ffffff]'>
                        <a href="https://hire-pro.netlify.app/">
                            <div>
                                <img className='' src={hirepro} alt="" />
                            </div>
                            <div>
                                <div><p className='font-extrabold text-xl'>HirePro</p></div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi ipsum quisquam dignissimos quos quis at fugiat aliquid deserunt officiis totam et incidunt error voluptate expedita distinctio, magni pariatur repellendus.</div>
                            </div>
                        </a>
                    </div>

                    
                </div>
                <div className='flex p-4 '>
                    <div className='card m-2 rounded-2xl'>
                        <a href="https://hire-pro.netlify.app/">
                            <div>
                                <img className='' src={hirepro} alt="" />
                            </div>
                            <div>
                                <div><p>HirePro</p></div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi ipsum quisquam dignissimos quos quis at fugiat aliquid deserunt officiis totam et incidunt error voluptate expedita distinctio, magni pariatur repellendus.</div>
                            </div>
                        </a>
                    </div>

                    <div className='card m-2 rounded-2xl'>
                        <a href="https://hire-pro.netlify.app/">
                            <div>
                                <img className='' src={hirepro} alt="" />
                            </div>
                            <div>
                                <div><p>HirePro</p></div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi ipsum quisquam dignissimos quos quis at fugiat aliquid deserunt officiis totam et incidunt error voluptate expedita distinctio, magni pariatur repellendus.</div>
                            </div>
                        </a>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Projects