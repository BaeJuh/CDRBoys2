import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Gallery.css";

const Gallery = () => {

    useEffect(() => {
        const fetchImg = async () => {
            try {
                const res = await fetch("data/data.json");
                const data = res.json();

                
            } catch (err) {
                console.log(err);
            }
        }
        fetchImg();
    }, []);

    return (
        <div>

        </div>
    );
}

export default Gallery;