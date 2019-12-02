import React, {useState,useCallback} from 'react';
import "./slick.css";
import "./slick_theme.css";
import "./imageHover.css";

const SliderImage = ({onZoom,data}) =>{
    return(
        <div className='container'>
            <img className='image' src={`${data.attaches}`} onClick={onZoom}/>
            <div className="middle">
                {data.contents}
            </div>
        </div>
    )
};
export default SliderImage;