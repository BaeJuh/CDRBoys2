import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "./Home.css"

const Home = () => {
    const images = [
        { src: "image1.jpg", title: "hello1" },
        { src: "image2.jpg", title: "hello2" }
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="homeOutbox">
            {
                images.map((image, i) => (
                    <div
                        key={i}
                        className={`img ${index === i ? "active" : ""}`}
                        style={{ backgroundImage: `url("images/${image.src}")` }}
                    >
                        <h1
                            className={`title ${index === i ? "on" : ""}`}
                        >{image.title}</h1>
                    </div>)
                )
            }
        </div>
    );
}

export default Home;