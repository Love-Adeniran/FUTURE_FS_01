import React, { useState } from 'react'


const Carousel = () => {
    const [index, setIndex] = useState(0);
    const slides = [
        {
            id: 1, content: `${<div className='text-xl justify-items-center h-[100%] rounded rounded-bl-4xl rounded-tr-4xl mx-auto  backdrop-blur-md border border-amber-900 md:py-6 md:px-4 py-4 md:rounded-md sm-mx-4 text-amber-900'>
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
                                </div>}` },
        { id: 2, content: `${<div className='p-2 my-2 py-3 flex justify-center mx-auto z-10'>
                                        <img className='object-cover h-100 hover:animate-[ping] ease-in m-2 rounded-md ' src={myImg} alt="" />
                                        {/* <img src={myAvt} className='hover:animate-ping ease-in-out' alt="" /> */}
                                    </div>}` },
    ];


    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
            {/* Slides wrapper */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`min-w-full h-64 flex items-center justify-center text-white text-xl font-semibold ${slide.color}`}
                    >
                        {slide.content}
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                ›
            </button>
        </div>
    );
};




export default Carousel