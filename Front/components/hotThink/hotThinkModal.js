import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Modal from 'react-bootstrap/Modal';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'antd';
import FreeThinkRead from '../../container/freeThink/freeThinkRead';
import CardActions from '@material-ui/core/CardActions';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckIcon from '@material-ui/icons/Check';
import TempPanel from '../../container/hotThink/tempPanel';

function MyVerticallyCenteredModal(props) {
  const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"

    >
      <Modal.Header style={{ backgroundColor: 'red', }}
                    closeButton>
        <Modal.Title style={{
          color: '#f5f6f7',
          fontFamily: 'Arial',
          fontStyle: 'italic',
          fontWeight: 'bold',

        }}>
          Hot Think
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <TempPanel/>
        {/*/!*<h4 style={{borderBottom:'solid'}}>나는 노동자입니다.</h4>*!/*/}
        {/*<div style={{*/}
        {/*  backgroundColor: 'red'*/}
        {/*}}>*/}
        {/*  <Row>*/}
        {/*    <Col xs={{ span: 12 }}>*/}
        {/*      <div className='box' style={{*/}
        {/*        height: '50vh',*/}
        {/*        width: '100%',*/}
        {/*        background: '#000000',*/}
        {/*        display: 'table'*/}
        {/*      }}>*/}
        {/*        <div style={{*/}
        {/*          display: 'table-cell',*/}
        {/*          width: '100%',*/}
        {/*          verticalAlign: 'middle'*/}
        {/*        }}>*/}
        {/*          <img className='img' src={`/static/images/image1.jpg`}*/}
        {/*               style={{*/}
        {/*                 width: '100%',*/}
        {/*                 height: 'auto',*/}
        {/*                 margin: '0 auto'*/}
        {/*               }}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </Col>*/}

        {/*    <Col span={12}>col-12</Col>*/}
        {/*  </Row>*/}
        {/*</div>*/}

      </Modal.Body>
      <Row>
        <Modal.Footer style={{ backgroundColor: '#f5f6f7' }}>

          <Col span={12}>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {/*{think.likes.includes(user.email)*/}
                {/*    // ?*/}
                {/*    <FavoriteIcon onClick={onClickLike} color='secondary'/>*/}
                {/*    :*/}
                {/*    <FavoriteIcon onClick={onClickLike} />*/}
                {/*}*/}
                {/*{think.likes.length}*/}
                <FavoriteIcon/>
              </IconButton>
              <IconButton aria-label="share">
                <CheckIcon/>
                {/*<CheckIcon/>{think.hits}*/}
              </IconButton>
              <IconButton aria-label="comment">
                <ChatBubbleOutlineIcon/>
                {/*<ChatBubbleOutlineIcon/>{think.replies.length}*/}
              </IconButton>
            </CardActions>
          </Col>
          <Col span={3}>
            <Button onClick={props.onHide} style={{
              fontWeight: 'bold',
              fontFamily: 'noto sans KR',
              color: 'snow1'
            }}>Close</Button>
          </Col>
        </Modal.Footer>
      </Row>
    </Modal>
  );
}

const HotThinkModal = ({think}) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <IconButton aria-label="zoomIn" onClick={() => setModalShow(true)}>
        <ZoomInIcon/>
      </IconButton>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
};
export default HotThinkModal;
