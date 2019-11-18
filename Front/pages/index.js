import React, { useEffect } from 'react';
import { Container, Image, Row, Col, Carousel } from 'react-bootstrap';
import Introduce from '../components/introduce';
import CardSlick from '../components/cards/cardSlick';
import BrushIcon from '@material-ui/icons/Brush';
import HoogieCard from '../components/cards/HoogieCard';

const Home = () => {
  return (
    <>
      <Introduce/>

      <div style={{
        backgroundColor: '#F8E0E0',
        height: '650px',
        marginTop: '20px',
        // textAlign: 'center'
      }}>
        <CardSlick/>
      </div>

      <Container
        style={{
          marginTop: '50px',
          height: '700px',
          paddingLeft: '50px',
          paddingRight: '50px',
        }}
      >
        <Container style={{
          border: 'solid 2px',
          borderColor: '#ced4da',
          height: '30%',
          padding: '10px'
        }}>
          <Row>
            <Col md={3}
                 style={{
                   textAlign: 'center'
                 }}>
              <Image
                style={{
                  height: '180px'
                }}
                src="/static/images/human1.jpg" roundedCircle={true}></Image>
            </Col>
            <Col
              style={{
                marginLeft: '2%',
              }}
            >
              <Row style={{
                marginTop: '40px',
              }}>
                <Col
                  md={2}
                  style={{
                    fontSize: '20px',
                    fontFamily: '고딕체',
                    fontWeight: 'bolder',
                    borderRight: 'solid 2px',
                    borderRightColor: '#ced4da',
                  }}>홍민석</Col>
                <Col
                  style={{
                    fontSize: '20px',
                    color: '#868e96',
                  }}>노가다꾼</Col>
              </Row>
              <Row style={{ marginTop: '5px' }}>
                실력 향상에 도움이 되는 핫띵크 프로젝트!<br/>
                데이터베이스 설계는 정말 어려웡!
              </Row>

            </Col>
          </Row>
        </Container>


        <Container style={{
          marginTop: '5px',

          border: 'solid 2px',
          borderColor: '#ced4da',
          height: '30%',
          padding: '10px'
        }}>
          <Row>
            <Col md={3}
                 style={{
                   textAlign: 'center'
                 }}>
              <Image
                style={{
                  height: '180px'
                }}
                src="/static/images/human2.jpg" roundedCircle={true}></Image>
            </Col>
            <Col
              style={{
                marginLeft: '2%',
              }}
            >
              <Row style={{
                marginTop: '40px',
              }}>
                <Col
                  md={2}
                  style={{
                    fontSize: '20px',
                    fontFamily: '고딕체',
                    fontWeight: 'bolder',
                    borderRight: 'solid 2px',
                    borderRightColor: '#ced4da',
                  }}>강태구</Col>
                <Col
                  style={{
                    fontSize: '20px',
                    color: '#868e96',
                  }}>백수</Col>
              </Row>
              <Row style={{ marginTop: '5px' }}>
                여러분, 저 잠수 탈게요 수고염(찡긋!)
              </Row>

            </Col>
          </Row>
        </Container>
        <Container style={{
          marginTop: '5px',
          border: 'solid 2px',
          borderColor: '#ced4da',
          height: '30%',
          padding: '10px'
        }}>
          <Row>
            <Col md={3}
                 style={{
                   textAlign: 'center'
                 }}>
              <Image
                style={{
                  height: '180px',
                }}
                src="/static/images/human3.jpg" roundedCircle={true}></Image>
            </Col>
            <Col
              style={{
                marginLeft: '2%',
              }}
            >
              <Row style={{
                marginTop: '40px',
              }}>
                <Col
                  md={2}
                  style={{
                    fontSize: '20px',
                    fontFamily: '고딕체',
                    fontWeight: 'bolder',
                    borderRight: 'solid 2px',
                    borderRightColor: '#ced4da',
                  }}>이문혁</Col>
                <Col
                  style={{
                    fontSize: '20px',
                    color: '#868e96',
                  }}>노예</Col>
              </Row>
              <Row style={{ marginTop: '5px' }}>
                자살각이야
              </Row>

            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
