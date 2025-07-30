import {} from 'react'
import './index.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

    return (
        <>
            <BrowserRouter className='relative'>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
