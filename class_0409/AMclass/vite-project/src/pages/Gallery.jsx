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
                        dataImg.concat(dataImg).map((img, i) => (
                            <div key={i} className="scrollInBox">
                                <div>{img.title}</div>
                                <img src={img.src} alt={img.title} />
                                <div>{img.dis}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <motion.div
                className="fadeSection"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                viewport={{ once: true, amount: 0.7 }}
            >
                <div className="imgBox">
                    <img
                        src={"/images/image1.jpg"}
                        alt="image"
                    />
                </div>
                <div className="textBox">
                    <h2>Hello</h2>
                    <h4>Hello, Hello, Hello</h4>
                </div>
            </motion.div>
            <motion.div
                className="fadeSection"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                viewport={{ once: true, amount: 0.7 }}
            >
                <div className="imgBox">
                    <img
                        src={"/images/image2.jpg"}
                        alt="image"
                    />
                </div>
                <div className="textBox">
                    <h2>Hello2</h2>
                    <h4>Hello, Hello, Hello</h4>
                </div>
            </motion.div>

            <div className="groupImg">
                {
                    [1, 2].map((i) => (
                        <motion.img
                            className="groupImgBox"
                            key={i}
                            src={`/images/image${i}.jpg`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i / 2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Gallery;