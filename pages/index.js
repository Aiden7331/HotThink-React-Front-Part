import React from 'react';
import Introduce from "../components/introduce";

const Home = () => {
    return(
        <>
            <Introduce/>
            <div style={{backgroundColor:'#F8E0E0',height:'600px', marginTop:'100px', textAlign:'center'}}>
                <h1>광고1</h1>
            </div>

            <div style={{backgroundColor:'#F7F2E0',height:'600px', marginTop:'100px', textAlign:'center'}}>
                <h1>광고2</h1>
            </div>

            <div style={{backgroundColor:'#E6F8E0',height:'600px', marginTop:'100px', textAlign:'center'}}>
                <h1>광고3</h1>
            </div>

            <div style={{backgroundColor:'#E0F2F7',height:'600px', marginTop:'100px', textAlign:'center'}}>
                <h1>광고4</h1>
            </div>
        </>
    );
};

export default Home;