import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import { Icon } from 'antd';

const SubscribeButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <button variant='primary' style={{
        margin: '1%',
        backgroundColor: 'white',
        border: '2px outset #f5f6f7'
      }}
              onClick={handleShow}
      >
        <Icon type="fire" theme="twoTone" twoToneColor="red"
              style={{ fontSize: '20px' }}/>
        <div>상품 결제</div>
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header style={{
          border: 'none',
          backgroundColor: '#f5f6f7',
          width: '100%'
        }} closeButton>
          <Modal.Title style={{
            color: 'red',
            fontFamily: 'Arial',
            fontStyle: 'italic',
            fontWeight: 'bold',


          }}>
            Hot Think
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          textAlign: 'center',


        }}>
          <div style={{
            textAlign: 'center',
          }}>
            <Icon type="info-circle" style={{
              fontSize: '100px',
              color: 'red'

            }}/>
          </div>
          <div style={{
            fontFamily: 'Noto Sans KR',
            fontStyle: 'italic',
            color: 'red',
            fontSize: '20px',
            textAlign: 'center',
            marginTop: '3%',
            fontWeight: '800',
          }}>
            헤당 상품을 구매하시겠습니까?
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '1%'
          }}>
            지금 구매하시면 결제 기간에 따라 포인트가 차감됩니다.<br/>
            BASIC, STANDARD(은)는 할인이 적용되지 않습니다.<br/>
            PRIMIUM은 10%, EXPRESS는 20% 할인이 적용됩니다.<br/>
            구매를 원하시면 구매 버튼을 눌러주세요.<br/>
            취소를 원하시면 취소 버튼을 눌러주세요.<br/>

          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '5%'
          }}>
            <Button variant="secondary" onClick={handleClose} style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black',
              marginRight: '15%',
              paddingLeft: '10%',
              paddingRight: '10%'
            }}>
              구매
            </Button>
            <Button variant="primary" onClick={handleClose} style={{
              backgroundColor: 'black',
              color: 'white',
              paddingLeft: '10%',
              paddingRight: '10%'
              // marginRight: '30%'
            }}>
              취소
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer style={{
          backgroundColor: '#f5f6f7',
          border: 'none'
        }}>

        </Modal.Footer>

      </Modal>
    </div>
  );
};

export default SubscribeButton;
