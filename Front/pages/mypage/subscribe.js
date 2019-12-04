import React from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import SubscribeButton from '../../container/mypage//SubscribeButton';

const Subscribe = () => {

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#f5f6f7',
      marginTop: '2%',
      marginBottom: '5%',
      fontFamily: 'Noto Sans KR',
      fontStyle: 'italic'
    }}>
      <h4 style={{ textAlign: 'center' }}>Welcome to
        <h4 style={{ textAlign: 'center' }}>
          <h1 style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'red',
            fontFamily: 'Noto Sans KR'
          }}>HotThink
          </h1> Subscribe page
        </h4>
      </h4>
      <p style={{
        marginTop: '3%',
        paddingTop: '1%'
      }}>
        <Row
          type="flex" justify="center">
          <Col span={5} style={{
            border: '5px solid white',
            borderColor: '#AAFFFF',
            marginRight: '1%',
            height:'100%'
          }}>
            <Row style={{ backgroundColor: '#00FFFF' }}>
              <div style={{
                fontSize: '50px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>1 Week
              </div>
            </Row>
            <Row style={{ backgroundColor: '#77FFFF' }}>
              <div style={{
                fontSize: '40px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>7,000 Point
              </div>
            </Row>
            <Row style={{ backgroundColor: '#AAFFFF' }}>
              <div style={{
                fontSize: '30px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>BASIC(0)%
              </div>
            </Row>
            <span>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                일 주일동안 사용하실 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                핫띵크 게시물을 읽을 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                리얼띵크 게시물을 쓰고,읽고,수정하고,삭제하실 수 있습니다.<br/></div>
            </span>

            <Row style={{ backgroundColor: '#AAFFFF' }}>
              <div style={{
                textAlign: 'center',
                border: '3px solid #AAFFFF'
              }}>
                <div><SubscribeButton/></div>
              </div>
            </Row>

          </Col>
          <Col span={5} style={{
            border: '5px solid ',
            borderColor: '#ffffaa',
            marginRight: '1%',
            height:'100%'
            // border: '3px solid black',

          }}>
            <Row style={{ backgroundColor: '#FFFF00' }}>
              <div style={{
                fontSize: '50px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>1 Month
              </div>
              <Row style={{ backgroundColor: '#FFFF77' }}>
                <div style={{
                  fontSize: '40px',
                  textAlign: 'center',
                  color: 'white',
                  paddingTop: '5%',
                  paddingBottom: '5%'
                }}>30,000 Point
                </div>
              </Row>
            </Row>
            <Row style={{ backgroundColor: '#FFFFAA' }}>
              <div style={{
                fontSize: '30px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>Standard(0%)
              </div>
            </Row>
            <span>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                한 달동안 사용하실 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                핫띵크 게시물을 읽을 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                리얼띵크 게시물을 쓰고,읽고,수정하고,삭제하실 수 있습니다.<br/></div>
            </span>

            <Row style={{ backgroundColor: '#FFFFaa' }}>
              <div style={{
                textAlign: 'center',
                border: '3px solid #FFFFaa'
              }}>
                <div><SubscribeButton/></div>
              </div>
            </Row>
          </Col>
          <Col span={5} style={{
            border: '5px solid white',
            borderColor: '#ffaaff',
            // border: '3px solid black',
            marginRight: '1%',
            height:'100%'
          }}>
            <Row style={{
              backgroundColor: '#FF00FF',
              textColor: 'white'
            }}>
              <div style={{
                fontSize: '50px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>1 Quarter
              </div>
            </Row>
            <Row style={{ backgroundColor: '#FF77FF' }}>
              <div style={{
                fontSize: '40px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>81,000 Point
              </div>
            </Row>
            <Row style={{ backgroundColor: '#FFAAFF' }}>
              <div style={{
                fontSize: '30px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>PREMIUM(10%)
              </div>
            </Row>
            <span>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                일 분기동안 사용하실 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                핫띵크 게시물을 읽을 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                리얼띵크 게시물을 쓰고,읽고,수정하고,삭제하실 수 있습니다.<br/></div>
            </span>
            <Row style={{ backgroundColor: '#ffaaFF' }}>
              <div style={{
                textAlign: 'center',
                border: '3px solid #ffaaFF'
              }}>

                <div><SubscribeButton/></div>
              </div>
            </Row>

          </Col>
          <Col span={5} style={{
            border: '5px solid white',
            borderColor: '#AAFFaa',
            marginRight: '1%',
            height:'100%'

            // border: '3px solid black'
          }}>
            <Row style={{ backgroundColor: '#00FF00' }}>
              <div style={{
                fontSize: '50px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>1 Year
              </div>
            </Row>
            <Row style={{ backgroundColor: '#77FF77' }}>
              <div style={{
                fontSize: '40px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>292,000 Point
              </div>
            </Row>
            <Row style={{ backgroundColor: '#AAFFAA' }}>
              <div style={{
                fontSize: '30px',
                textAlign: 'center',
                color: 'white',
                paddingTop: '5%',
                paddingBottom: '5%'
              }}>EXPRESS(20%)
              </div>
            </Row>
            <span>
             <div style={{
               textAlign: 'center',
               padding: '3% 5% 3% 5%',
               borderBottom: '5px dashed white'
             }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                일 년동안 사용하실 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                핫띵크 게시물을 읽을 수 있습니다.<br/></div>
              <div style={{
                textAlign: 'center',
                padding: '3% 5% 3% 5%',
                borderBottom: '5px dashed white'
              }}>
                <Icon type="heart" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px' }}/><br/>
                리얼띵크 게시물을 쓰고,읽고,수정하고,삭제하실 수 있습니다.<br/></div>
            </span>
            <Row style={{ backgroundColor: '#AAFFaa' }}>

              <div style={{
                textAlign: 'center',
                border: '3px solid #AAFFaa'
              }}>
                <div><SubscribeButton/></div>
              </div>
            </Row>
          </Col>
        </Row>
      </p>
    </div>
  );


};
export default Subscribe;
