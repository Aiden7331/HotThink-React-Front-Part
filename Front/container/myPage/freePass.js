import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseRealTicket, check } from '../../modules/reducer/user';


const FreePass = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} size="md"
             centered>
        <Modal.Header style={{
          border: 'none',
          backgroundColor: '#f5f6f7',
        }} closeButton>
          <Modal.Title style={{
            color: 'red',
            fontFamily: 'Arial',
            fontStyle: 'italic',
            fontWeight: 'bold',
          }}>
            HotThink
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center' }}>
          <span style={{ lineHeight: '30px' }}>
          <div style={{
            fontFamily: 'Arial',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: '40px',
            textAlign: 'left',
            marginLeft: '17%'
          }}>
          HotThink<br/>
          </div>
            <div style={{
              fontFamily: 'Arial',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '40px',
              textAlign: 'right',
              paddingRight: '10%',
              // lineHeight:"5px"
            }}>FreePass
          </div>
            <div style={{
              textAlign: 'center',
              fontSize: '50px'
            }}>
            <button style={{
              marginTop: '3%',
              marginBottom: '3%',
              borderRadius: '16%',
              backgroundColor: 'Gold',
              borderColor: 'gold',
              lineHeight: '100%',
              color: 'yellow',
              outline: 'none',
            }}
                    onClick={async() => {
                      await dispatch(purchaseRealTicket());
                      await dispatch(check());
                      setShow(false);
                    }}

            >
              10,000 Point
            </button>
          </div>

          </span>
          <div>
          </div>
          <div style={{
            textAlign: 'center',
            fontWeight: '500',
            fontStyle: 'italic',
            color: 'black',
            fontSize: '17px',
            fontFamily: 'Noto Sans KR'
          }}>
            핫띵크에 나의 프리띵크를 올리고 싶을 때<br/>
            좋아요 갯수가 부족할 때<br/>
          </div>
          <div style={{
            textAlign: 'center',
            fontWeight: '700',
            fontStyle: 'italic',
            color: 'red',
            fontSize: '30px',
            fontFamily: 'Noto Sans KR'
          }}>
            지금 당장 구매하세요!
          </div>
          <Icon type={'like'} style={{
            fontSize: '60px',
            fontStyle: 'italic'

          }}/>


        </Modal.Body>
        <Modal.Footer>
          <Button style={{
            backgroundColor: 'gold',
            borderColor: 'gold',
            color: 'yellow'
          }} onClick={handleClose}>
            구매
          </Button>
          <Button variant="default" style={{ color: 'rainbow' }} onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default FreePass;
