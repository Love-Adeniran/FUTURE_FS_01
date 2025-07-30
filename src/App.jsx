import {} from 'react'
import './index.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

function App() {

    return (
        <>
            <BrowserRouter className='relative'>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
