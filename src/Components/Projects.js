import React from 'react'
import Slider from './Slider'
import './Projects.scss';

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="my-auto">Наши проекты</h1>
            <div className="slider">
                <Slider />
            </div>
        </div>
    );
}