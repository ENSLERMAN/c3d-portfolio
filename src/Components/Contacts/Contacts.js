import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './Contacts.scss';

export default function Contacts() {
    return (
        <div className="contacts" id="contacts">
            <h1>Контакты</h1>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="text-right">
                                <h4>Мы находимся тут</h4>
                                <span className="material-icons arrow">
                                    subdirectory_arrow_right
                                </span>
                            </div>
                            <div className="pt-5">
                                <p>Нам можно написать сюда:</p>
                                <a href="mailto:is2@mail.ru">is2@mail.ru</a>
                                <p>Или сюда:</p>
                                <a href="mailto:the.nexeon@gmail.com">the.nexeon@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-sm-8 my-3">
                            <YMaps>
                                <Map defaultState={{ center: [55.781354, 37.711227], zoom: 16 }} width={'100%'}>
                                    <Placemark geometry={[55.781354, 37.711227]} />
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                </div>
        </div>
    );
}