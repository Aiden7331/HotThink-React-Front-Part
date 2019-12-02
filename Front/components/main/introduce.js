import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Introduce = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
          <img
            width={"100%"}
            src="/static/images/main1.png"
            alt="First slide"
          />
      </Carousel.Item>
      <Carousel.Item>
          <div>
          <img
            width={"100%"}
            src="/static/images/main2.png"
            alt="First slide"
          /></div>
      </Carousel.Item>
      <Carousel.Item>
          <div>
          <img
            width={"100%"}
            src="/static/images/main3.jpg"
            alt="First slide"
          /></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Introduce;
