import React from 'react'
import Slider from './Slider'
import Carousel from './Carousel'
import './About.scss';

export default function About() {
    return (
        <div className="about" id="team">
            <h1>О команде</h1>
            <div className="slider">
                <Slider />
            </div>
            <h2>Технологии, которые мы используем:</h2>
            <Carousel />
        </div>
    );
}