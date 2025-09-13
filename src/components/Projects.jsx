import React, { useEffect, useState } from 'react'
import '../assets/Styles/sparkles.css'
import hirepro from '../assets/Images/HireProImg.png'
// import junchurchclone from '../assets/Images/junchurchclone.png'
import Confetti from './Confetti'

const Projects = () => {
    const [showHireProDetails, setshowHireProDetails] = useState(false)


    return (
        <>
            <div className='relative py-20 bg-gradient-to-br from-blue-400 via-amber-500 to-amber-950 min-h-screen overflow-hidden'>
                <Confetti count={80} />
                <div className='md:flex py-4 md:space-x-6 justify-center px-4'>
                    <div className='card m-2 sm:w-full p-4 rounded-[50px] backdrop-blur-sm bg-white/30'>
                        <a href="https://hire-pro.netlify.app/">
                            <div className='px-4'>
                                <img className='rounded-2xl' src={hirepro} alt="" />
                            </div>
                            <div className='px-4 py-2'>
                                <div><p className='font-extrabold text-xl text-[#374151]'>HirePro</p></div>
                                <div className='space-y-2 text-[#374151] '>
                                    
                                    <div>
                                        <h1 className=''>🔹Overview</h1>
                                        <p>HirePro is a web-based platform designed to simplify the job search and application process. It enables job seekers to browse open positions, apply directly, and track their applications, while also allowing recruiters to showcase job listings in a clean and user-friendly interface.
                                        </p>
                                        <div onClick={() => setShowDetails(!showHireProDetails)} className='text-blue-500 cursor-pointer text-right'>Read more</div>
                                    </div>
                                    <div className={`space-y-2 ${showHireProDetails ? 'block' : 'hidden'}`}>
                                        <p>
                                            The platform is built using React for the frontend, Redux Toolkit for state management, and Tailwind CSS for styling. It integrates with REST APIs to fetch job listings and handle user authentication, ensuring a seamless experience for both job seekers and recruiters.
                                        </p>
                                        <div>
                                            <h1>🔹 Tech Stack</h1>
                                            <ul>
                                                <li>Frontend Framework: React.js</li>
                                                <li>State Management: Redux Toolkit</li>
                                                <li>Styling: Tailwind CSS</li>
                                                <li>API Integration: REST APIs (mocked with JSON server or backend endpoints)</li>
                                                <li>Version Control: Git & GitHub</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='card m-2 sm:w-full p-4 rounded-[50px] backdrop-blur-sm bg-white/30 '>
                        <a href="https://hodjunchurchmonitorclone.netlify.app/">
                            <div>
                                <img className='rounded-4xl' src={junchurchclone} alt="" />
                            </div>
                            <div className='px-4 py-2 text-[#440455]'>
                                <div><p className='font-extrabold text-xl'>HOD Junior Church Monitor Clone</p></div>
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