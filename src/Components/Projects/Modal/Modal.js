import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './Modal.scss'

export default function MyModal(props) {

    let item = props.arr[props.item]

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            { item !== undefined && 
            <Modal.Body>
                <div className="back-btn">
                    <span   className="material-icons" 
                            onClick={props.onHide}
                    >arrow_back</span>
                </div>
                <div className="m-3">
                    <div className="container-fluid">
                    <h2>{item.title}</h2>
                        <div class="row">
                            <div class="col-sm-8">
                                <img src={item.img}></img>
                            </div>
                            <div class="col-sm-4 text-break">
                                <h4>{item.desc}</h4>
                            </div>
                        </div>
                    <a href="http://mpu-cloud.ru">Попробовать самому: mpu-cloud.ru</a>
                    </div>
                </div>
            </Modal.Body>
            }
        </Modal>
    );
}