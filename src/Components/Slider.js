import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'

const data = [
    {
        id: 1, 
        img: '', 
        title: 'Допустим редуктор 1',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    },
    {
        id: 2, 
        img: '', 
        title: 'Допустим редуктор 2',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    },
    {
        id: 3, 
        img: '', 
        title: 'Допустим редуктор 3',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    },
    {
        id: 4, 
        img: '', 
        title: 'Допустим редуктор 4',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    }
]

const Slider = () => {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
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
                        <div>
                            <h1>{el.title}</h1>
                        </div>
                    );
                })
            }
        </Swiper>
    )
};

export default Slider;