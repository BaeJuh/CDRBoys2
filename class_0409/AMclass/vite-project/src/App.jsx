import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import GuestBook from "./pages/GuestBook";
import ScrollText from "./pages/ScrollText"

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
                        <Route path="/guest" element={<GuestBook />} />
                        <Route path="/scroll" element={<ScrollText />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App
