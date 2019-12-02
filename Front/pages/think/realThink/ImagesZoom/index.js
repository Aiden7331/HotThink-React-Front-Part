import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {Modal, ModalContent, CloseBtn, SlickWrapper, ImgWrapper } from './style';

const ImagesZoom = ({ data, onClose}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Modal>
            <ModalContent>
                <SlickWrapper>
                    <CloseBtn type="close" onClick={onClose}/>
                    <div>
                        <Slider
                            arrows={true}
                            dots
                            dotsClass={'slick-dots slick-thumb'}
                            infinite={false}
                            slidesToShow={1}
                            slidesToScroll={1}
                        >
                            {data.map((v) => {
                                return (
                                    <ImgWrapper>
                                        <img src={v.attaches}/>
                                    </ImgWrapper>
                                );
                            })}
                        </Slider>
                    </div>
                </SlickWrapper>
            </ModalContent>
        </Modal>
    );
};

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;