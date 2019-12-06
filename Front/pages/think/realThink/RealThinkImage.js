import React, {useCallback, useState} from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick_theme.css";
import "./imageHover.css";
import SliderImage from "./SliderImage";

const RealThinkImage = ({data,onZoom}) => {
    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
    };

    return (
        <div style={{marginTop:'30px'}}>
            <h2 style={{textAlign:'center'}}> 자료사진 </h2>
            <Slider {...settings}>
                {data.map((v)=>{
                    return(
                        <div>
                            <SliderImage onZoom={onZoom} data={v}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default RealThinkImage;