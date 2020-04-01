import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './Slider.scss'

const data = [
    {
        id: 1, 
        img: '/Assets/images/reductor.jpg', 
        title: 'Допустим редуктор 1',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    },
    {
        id: 2, 
        img: '/Assets/images/reductor.jpg', 
        title: 'Допустим редуктор 2',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    },
    {
        id: 3, 
        img: '/Assets/images/reductor.jpg', 
        title: 'Допустим редуктор 3',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    },
    {
        id: 4, 
        img: '/Assets/images/reductor.jpg', 
        title: 'Допустим редуктор 4',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    }
]

const Slider = () => {
    const params = {
        slidesPerView: 'auto',
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 1,
            }
        },
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    return (
        <Swiper {...params}>
            {
                data.map( el => {
                    return (
                        <div className="brd" key={el.id}>
                            <h3 className="mb-3">{el.title}</h3>
                            <img src={el.img} alt=""/>
                            <h5 className="">{el.desc}</h5>
                            <button className="mx-auto">Перейти к проекту</button>
                        </div>
                    );
                })
            }
        </Swiper>
    )
};

export default Slider;