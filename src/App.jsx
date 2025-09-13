import {} from 'react'
import './index.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Carousel from './components/Carousel'

function App() {

    return (
        <>
            {/* <BrowserRouter className=''> */}
            <Carousel />
            {/* <Navbar /> */}
                {/* <Routes>
                    <Route path='/' element={<Homepage />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path='/contactme' element={<Contact/>}></Route>
                </Routes> */}
            {/* </BrowserRouter> */}
        </>
    )
}

export default App
