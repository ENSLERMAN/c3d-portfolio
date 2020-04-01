import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './Slider.scss'

const data = [
    {
        id: 1, 
        img: '/Assets/team/lena.jpg', 
        title: 'Это Лена. Она клёвая',
    },
    {
        id: 2, 
        img: '/Assets/team/seva.jpg', 
        title: 'Сева любит Timberland',
    },
    {
        id: 3, 
        img: '/Assets/team/nastya.jpg', 
        title: 'Настя любит 3D-моделирование и все, что с ним связано',
    },
    {
        id: 4, 
        img: '/Assets/team/masha.jpg', 
        title: 'Это Маша, подружка Лены',
    },
    {
        id: 5, 
        img: '/Assets/team/god.jpg', 
        title: 'Это Артём, он просто гений',
    },
    {
        id: 6, 
        img: '/Assets/team/ira.jpg', 
        title: 'Это Мирина Утёсова',
    },
    {
        id: 7, 
        img: '/Assets/team/noname.jpg', 
        title: 'Я правда не знаю кто это',
    },
    {
        id: 8, 
        img: '/Assets/team/andrey.png', 
        title: 'Линус Торвальдс второй',
    },
    {
        id: 9, 
        img: '/Assets/team/lubovnik.jpg', 
        title: 'Это Гоша',
    },
    {
        id: 10, 
        img: '/Assets/team/artem.jpg', 
        title: 'Это Артем aka хук в крипа',
    },
    {
        id: 11, 
        img: '/Assets/team/mama_ya_programmist.png', 
        title: 'Лёша.',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    }
]

const Slider = () => {
    const params = {
        slidesPerView: 'auto',
        breakpoints: {
           
            769: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        },
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    return (
        <div className="container-fluid">
            <div className="pt-sm-3 mx-auto">
                <Swiper {...params}>
                    {
                        data.map( el => {
                            return (
                                <div className="board" key={el.id}>
                                    <img src={el.img} alt=""/>
                                    <h3>{el.title}</h3>
                                </div>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
};

export default Slider;