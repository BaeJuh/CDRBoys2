import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Guestbook from "./pages/Guestbook";
import "./styles/main.scss";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/guestbook" element={<Guestbook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
