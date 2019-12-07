import React from 'react';
import {Card} from 'react-bootstrap';
import {Row,Col,Icon,Tag,Avatar} from 'antd';
import Link from "next/Link";

const RealThinkCard = ({data}) => {
    const onRead =() => {

    };
    return(
      <>
          <Card style={{ width: '100%',height:'255px', marginTop:'10px', marginLeft:'10px',marginRight:'10px'}}>
              <Row type="flex" justify="center">
                  <Col span={18}>
                      <Card.Body>
                          {!data.avatar?
                          <Avatar style={{
                              display: 'inline-block',
                              height: '50px',
                              width: '50px',
                              float: 'left',
                              fontSize: '30px',
                              paddingTop: '10px'
                          }}>
                              {data.nickName[0]}
                          </Avatar>
                              :
                              <Avatar style={{
                                  display: 'inline-block',
                                  height: '50px',
                                  width: '50px',
                                  float: 'left',
                                  fontSize: '30px',
                              }} src={data.avatar}>
                              </Avatar>
                          }
                          <div style={{ float:'left'}}>
                              <div style={{fontSize:'20px'}}>{data?data.nickName:'등록자'}</div>
                              <div style={{fontSize:'15px'}}>{data?data.title:'제목'}</div>
                          </div>
                          <Tag style={{float:'right'}} color="cyan">거래대기</Tag>
                          <Card.Text>
                                <pre style={{marginTop:'70px',overflow:'hidden',textOverflow:'ellipsis',display:'-webkit-box',
                                    wordWrap:'break-word', lineHeight:'1.2em',height:'6em', whiteSpace:'pre-wrap'}}>
                                    {data?data.contents:'내용'}
                                </pre>
                          </Card.Text>
                          <Link>
                              <a href='/think/realThink/RealThinkRead'
                                 onClick={onRead}>
                                  내용보기
                              </a>
                          </Link>
                      </Card.Body>
                  </Col>
                  <Col span={6}>
                      <Card.Img variant="top" src={data?data.src:'/static/images/logo.png'} style={{width:'100%',height:'253px'}} />
                  </Col>
              </Row>
          </Card>
      </>

    );
};

export default RealThinkCard;
