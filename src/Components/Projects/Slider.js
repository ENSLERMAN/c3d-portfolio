import React from 'react';
import Swiper from 'react-id-swiper';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import MyModal from './Modal'
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

const [modalShow, setModalShow] = React.useState(false);
const handleClose = () => setModalShow(false);
const handleShow = () => setModalShow(true);

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
            prevEl: '.material-icons.navigation.btn-back'
        }
    }
    return (
        <div className="container-fluid">
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
                                    <button className="mx-auto"
                                            onClick={handleShow}
                                    >Перейти к проекту</button>
                                </div>
                            );
                        })
                    }
                </Swiper>
            </div>

            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
};

function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default Slider;