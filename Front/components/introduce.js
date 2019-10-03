import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';

const Introduce = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return(
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{height:'500px'}}
                    className="d-block w-100"
                    src="/Front/static/images/image1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div style={{backgroundColor:'white', overflow:'hidden', height:'auto'}}>
                        <h3>당신의 아이디어를 공유하세요</h3>
                        <h4>그 순간 더이상 실현 불가능한 아이디어가 아닙니다.</h4>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:'500px'}}
                    className="d-block w-100"
                    src="/Front/static/images/image2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div style={{backgroundColor:'white', overflow:'hidden', height:'auto'}}>
                        <h3>구현과 설계에 정확한 도움을 드립니다.</h3>
                        <h4>더이상 혼자 머리를 싸매고 끙끙대지 마세요. 전문가가 함께합니다.</h4>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:'500px'}}
                    className="d-block w-100"
                    src="/Front/static/images/image3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div style={{backgroundColor:'white', overflow:'hidden', height:'auto'}}>
                        <h3>단순히 판매만 하셔도 좋습니다.</h3>
                        <h4>그것 또한 당신의 것이기 때문입니다.</h4>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Introduce;