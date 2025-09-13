import React from 'react'
import Navbar from './Navbar'
import myImg from '../assets/Images/LoveprofImg.jpg'
import myAvt from '../assets/Images/avatar.png'
import { Link } from 'react-router'
import Projects from './Projects'
import '../assets/Styles/sparkles.css'
import Confetti from './Confetti'
import Footer from './Footer'


const Homepage = () => {

    return (
        <>
            <div className='bg-black min-h-screen overflow-hidden'>
                <section className='relative pt-30'>
                    <Navbar />
                    <div className='z-40'>
                        <Confetti count={80} />

                        <div className=' flex px-4 z-20 w-screen justify-center md:flex-row sm:flex-col '>
                            <div className=" px-6 py-4 flex space-around items-center md:my-4 md:flex-row sm:flex-col mx-auto border border-amber-900 rounded-2xl shadow-[inset_10px_10px_10px_#7b3306,inset_-10px_-10px_6px_#ffffff] bg-amber-500/10">
                                {/* <div className=' p-4 md:flex-2/4 md:my-4'> */}
                                {/* TEXT */}
                                <div className='text-xl justify-items-center h-[100%] rounded rounded-bl-4xl rounded-tr-4xl mx-auto  backdrop-blur-md border border-amber-900 md:py-6 md:px-4 py-4 md:rounded-md sm-mx-4 text-amber-900'>
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
                                            <p className=' text-orange-900'>L</p>
                                            <p className=' text-orange-700'>o</p>
                                            <p className=' text-orange-500'>v</p>
                                            <p className=' text-orange-300'>e</p>
                                            <p className=' text-orange-900'>y</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2 my-2 py-3 flex justify-center mx-auto z-10'>
                                <img className='object-cover h-100 hover:animate-[ping] ease-in m-2 rounded-md ' src={myImg} alt="" />
                                {/* <img src={myAvt} className='hover:animate-ping ease-in-out' alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className='justify-center flex z-40 my-4'>
                        <div className='p-2 '>
                            {/* <Link to={}/> */}
                            <Link to='/projects' className='border hover:bg-amber-900 hover:text-amber-100 hover:border-0 rounded py-2 px-4 text-amber-900 font-bold text-2xl cursor-pointer'>Let's Go</Link>
                        </div>
                    </div>
                </section>
                <main className='px-2 py-4'>
                    <div className='text-amber-900 text-center font-bold text-2xl py-4 mx-auto'>Skills</div>
                    <div className='py-2 mx-auto space-y-4 text-amber-900 font-bold md:w-2/4 sm:w-full px-4'>
                        <h1>Html</h1>
                        <progress className='progress-bar w-100' value="90" max="100"></progress>
                        <h1>Css</h1>
                        <progress className='progress-bar w-100' value="70" max="100"></progress>
                        <h1>JavaScript</h1>
                        <progress className='progress-bar w-100' value="70" max="100"></progress>
                        <h1>ReactJs</h1>
                        <progress className='progress-bar w-100' value="80" max="100"></progress>
                        
                    </div>
                </main>
                {/* <Footer /> */}

            </div>
        </>
    )
}

export default Homepage