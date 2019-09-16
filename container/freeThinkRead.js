import React from 'react';
import ControlledCarousel from "./controlledCarousel";
import {Row,Col} from "react-bootstrap";

const FreeThinkRead = () => {
    return(
        <>
            <div>
                <Row>
                    <Col><ControlledCarousel/></Col>
                    <Col>내용내용내용</Col>
                </Row>
            </div>
        </>
    );
};

export default FreeThinkRead;