import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <>
            <div className='fixed bottom-0 left-0'>
                <div className=' w-screen py-2  bg-amber-300/20 backdrop-blur-md border-t-2 border-amber-900 text-center '>
                    <div className='flex md:flex-row flex-col justify-center'>
                        <p className='md:px-2 text-amber-900'>Follow me on
                            <a href="http://https://www.linkedin.com/in/love-adeniran/" className='text-amber-900 font-bold'><i className=''>{<IoLogoLinkedin />}</i></a></p>
                        <p className='md:px-2 text-amber-900'> or send me a mail <a className='text-amber-900 font-bold' href="loveadeniran1@gmail.com">loveadeniran1@gmail.com</a></p>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer