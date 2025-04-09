import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

import "./App.css";

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
