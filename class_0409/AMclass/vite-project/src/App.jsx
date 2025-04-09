import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

import "./App.css";

// https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&lang=kr&appid=412e20d92030bf157d7b8e8e05c5d379

function App() {


    return (
        <>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App
