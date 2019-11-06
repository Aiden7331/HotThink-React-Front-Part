import React, {useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import Introduce from "../components/introduce";
import CardSlick from "../components/cards/cardSlick";
import Footer from "../container/main/footer";
import HoogieCard from "../components/cards/HoogieCard";

const Home = () => {
    return(
        <>
            <Introduce/>
            <div style={{backgroundColor:'#F8E0E0',height:'500px', marginTop:'100px', textAlign:'center'}}>
                <h1>IT</h1>
                <CardSlick/>
            </div>

            <div style={{backgroundColor:'#F7F2E0',height:'500px', marginTop:'100px', textAlign:'center'}}>
                <h1>기계</h1>
                <CardSlick/>
            </div>

            <div style={{backgroundColor:'#E6F8E0',height:'500px', marginTop:'100px', textAlign:'center'}}>
                <h1>화학</h1>
                <CardSlick/>
            </div>

            <div style={{backgroundColor:'#E0F2F7',height:'500px', marginTop:'100px', textAlign:'center'}}>
                <h1>의류</h1>
                <CardSlick/>
            </div>

            <div style={{backgroundColor:'#E0F2F7',height:'500px', marginTop:'100px', textAlign:'center'}}>
                <h1>건축</h1>
                <CardSlick/>
            </div>
            <div style={{backgroundColor:'#E0F2F7',height:'500px', marginTop:'100px', textAlign:'center'}}>
                <h1>후기</h1>
                <Carousel style={{paddingLeft:'50px', paddingRight:'50px',}}>
                    <Carousel.Item>
                        <HoogieCard/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <HoogieCard/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <HoogieCard/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer/>
        </>
    );
};

export default Home;