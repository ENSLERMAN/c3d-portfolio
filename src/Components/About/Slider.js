import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './Slider.scss'

const data = [
    {
        id: 1, 
        img: '/Assets/team/lena.jpg', 
        title: `Иудина Елена`,
        desc: `дизайнер`
    },
    {
        id: 2, 
        img: '/Assets/team/seva.jpg', 
        title: `Кочнев Всеволод`,
        desc: `разработчик`
    },
    {
        id: 3, 
        img: '/Assets/team/nastya.jpg', 
        title: 'Бокова Анастасия',
        desc: `дизайнер`
    },
    {
        id: 4, 
        img: '/Assets/team/masha.jpg', 
        title: 'Кижаева Мария',
        desc: `аналитик`
    },
    {
        id: 5, 
        img: '/Assets/team/god.jpg', 
        title: 'Камалетдинов Артем',
        desc: `разработчик`
    },
    {
        id: 6, 
        img: '/Assets/team/ira.jpg', 
        title: 'Морковина Ирина',
        desc: `аналитик`
    },
    {
        id: 7, 
        img: '/Assets/team/noname.jpg', 
        title: 'Новохатский Максим',
        desc: `дизайнер`
    },
    {
        id: 8, 
        img: '/Assets/team/andrey.jpg', 
        title: 'Архипов Андрей',
        desc: `разработчик`
    },
    {
        id: 9, 
        img: '/Assets/team/lubovnik.jpg', 
        title: 'Чудаков Георгий',
        desc: `разработчик`
    },
    {
        id: 10, 
        img: '/Assets/team/artem.jpg', 
        title: 'Зметный Артем',
        desc: `разработчик`
    },
    {
        id: 11, 
        img: '/Assets/team/mama_ya_programmist.png', 
        title: `Беседин Алексей`,
        desc: `разработчик`
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
                                    <img src={el.img} alt="img"/>
                                    <h3>{el.title}</h3>
                                    <h4>{el.desc}</h4>
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