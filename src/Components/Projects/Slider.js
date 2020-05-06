import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import MyModal from './Modal/Modal'
import 'swiper/swiper.scss'
import './Slider.scss'

const data = [
    {
        id: 1, 
        img: '/Assets/images/reductor.jpg', 
        title: 'Допустим редуктор 1',
        desc: 'Тут какой-то Андрей че-то делает.'
    },
    {
        id: 2, 
        img: '/Assets/team/lena.jpg', 
        title: 'Допустим редуктор 2',
        desc: 'И снова Лена'
    },
    {
        id: 3, 
        img: '/Assets/team/andrey.jpg', 
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

    const [modalShow, setModalShow] = React.useState(false);
    const [id, setId] = React.useState(-1);

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
        spaceBetween: 30,
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        loopFillGroupWithBlank: true,
    }

    const [swiper, updateSwiper] = useState(null);
    const goNext = () => {
      if (swiper !== null) {
        swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiper !== null) {
        swiper.slidePrev();
      }
    };

    return (
        <div className="container-fluid">
            <div onClick={goPrev} className="swiper-back"></div>
            <div onClick={goNext} className="swiper-next"></div>
            <div className="w-85 mx-auto">
                <Swiper {...params} getSwiper={updateSwiper}>
                    {
                        data.map( (el) => {
                            return (
                                <div className="brd" key={el.id}>
                                    <div>
                                        <h3 className="mb-3">{el.title}</h3>
                                        <img src={el.img} alt=""/>
                                        <h5 className="text-break">{el.desc}</h5>
                                    </div>
                                    <button className="mx-auto"
                                            onClick={ () => {
                                                setId(el.id);
                                                setModalShow(true)
                                            }}
                                    >Перейти к проекту</button>
                                </div>
                            );
                        })
                    }
                </Swiper>
            </div>
            <MyModal
                show={modalShow}
                item = {id - 1}
                arr = {data}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
};

export default Slider;