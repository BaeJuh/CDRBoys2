import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "./Home.css"

const Home = () => {
    const images = [
        { src: "image1.jpg", title: "hello1" },
        { src: "image2.jpg", title: "hello2" }
    ];
    const [index, setIndex] = useState(0);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const API_KEY = "412e20d92030bf157d7b8e8e05c5d379";
        const CITY = "Ansan";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&lang=kr&appid=${API_KEY}`;

        const fetchWeather = async () => {
            try {
                const res = await axios.get(URL);
                setWeather(
                    {
                        temp: res.data.main.temp,
                        description: res.data.weather[0].description,
                        icon: res.data.weather[0].icon,
                    }
                );
            } catch (err) {
                console.error(err);
            }
        }
        fetchWeather();
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
            {
                weather && (
                    <div
                        className="weather"
                    >
                        <img
                            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                            alt={weather.description}
                            referrerPolicy='no-referrer'
                        />
                        <div>{weather.temp} ℃</div>
                        <div>{weather.description}</div>
                    </div>
                )
            }
        </div>
    );
}

export default Home;