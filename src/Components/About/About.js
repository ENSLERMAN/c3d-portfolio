import React from 'react'
import Slider from './Slider'
import './About.scss';

export default function About() {
    return (
        <div className="about">
            <h1>О команде</h1>
            <div className="slider">
                <Slider />
            </div>
        </div>
    );
}