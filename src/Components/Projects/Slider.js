import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './Slider.scss'

const data = [
    {
        id: 1, 
        img: '/Assets/images/reductor.jpg', 
        title: 'Допустим редуктор 1',
        desc: 'Тут какой-то Андрей че-то делает. Смотрите какой важный куриц'
    },
    {
        id: 2, 
        img: '/Assets/team/lena.jpg', 
        title: 'Допустим редуктор 2',
        desc: 'Тут какой-то текст. Краткое описание там, все такое.'
    },
    {
        id: 3, 
        img: '/Assets/team/andrey.png', 
        title: 'Допустим редуктор 3',
        desc: 'Большоооооооооеееее оооооопппииииииисссааааааннннннниииииииеееее ппппрррррряяяяяям оооооооччеееееенььььь боооолллььььшшооооое'
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
            768: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2,
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
            nextEl: '.material-icons.navigation.btn-next',
            prevEl: '.material-icons.navigation .btn-next'
        }
    }
    return (
        <div className="container-fluid">
            {/* <div className="material-icons navigation btn-next" tabindex="0" role="button">arrow_forward_ios</div>
            <div className="material-icons navigation btn-back" tabindex="0" role="button">arrow_back_ios</div> */}
            <div className="w-85 mx-auto">
                <Swiper {...params}>
                    {
                        data.map( el => {
                            return (
                                <div className="brd" key={el.id}>
                                    <div>
                                        <h3 className="mb-3">{el.title}</h3>
                                        <img src={el.img} alt=""/>
                                        <h5 className="text-break">{el.desc}</h5>
                                    </div>
                                    <button className="mx-auto">Перейти к проекту</button>
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