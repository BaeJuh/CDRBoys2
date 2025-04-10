import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Gallery.css";

const Gallery = () => {
    const [dataImg, setDataImg] = useState([]);

    useEffect(() => {
        const fetchImg = async () => {
            try {
                const res = await fetch("data/data.json");
                const data = await res.json();
                console.log(data);
                setDataImg(data);

            } catch (err) {
                console.log(err);
            }
        }
        fetchImg();
    }, []);

    return (
        <div className="galleryOutBox">
            <div className="scrollImg">
                <div className="scrollTrack">
                    {
                        [...dataImg, dataImg].map((img, i) => (
                            <div key={i} className="scrollIndex">
                                <div>{img.title}</div>
                                <img src={img.src} alt={img.title} />
                                <div>{img.dis}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Gallery;