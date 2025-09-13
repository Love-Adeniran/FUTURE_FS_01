import React from 'react'
import Confetti from './Confetti'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <>
        <Navbar />
            <div className='md:flex mx-auto md:items-center bg-black md:py-22 justify-center min-h-screen '>
            <Confetti />
                <div className='md:px-4 py-4 md:rounded-md md:shadow-[inset_2px_3px_3px_#7b3306,inset_2px_2px_1px_#ffffff] sm-mx-4 text-amber-900'>
                    <div className='text-center py-8'><h1 className='font-bold text-2xl'>Contact me</h1></div>
                    <div className='px-4'>
                        <div className='px-4  '>
                            <div className='py-2'>
                                <p>Name</p>
                                <div><input type="text" className='md:w-100 px-1 w-full py-2 rounded shadow-[inset_0px_0px_4px_#7b3306,inset_1px_1px_6px_#7b3306] outline-0' /></div>
                            </div>
                        </div>
                        <div className='px-4 '>
                            <div className='py-2'>
                                <p>Email</p>
                                <div><input type="text" className='md:w-100 px-1 w-full py-2 rounded shadow-[inset_0px_0px_4px_#7b3306,inset_1px_1px_6px_#7b3306] outline-0' /></div>
                            </div>
                        </div>
                        <div className='px-4  '>
                            <div className='py-2'>
                                <p>Leave a message</p>
                                <div><textarea type="text" className='md:w-100 px-1 w-full py-2 rounded shadow-[inset_0px_0px_4px_#7b3306,inset_1px_1px_6px_#7b3306] outline-0' /></div>
                            </div>
                        </div>
                        <div className='flex justify-center px-4'>
                            <div className='px-4 md:py-4 py-2'>
                                <input className='px-4 py-2 sm:w-90 shadow-2xl bg-amber-900 text-amber-100 cursor-pointer rounded-xl ' type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        </>
    )
}

export default Contact