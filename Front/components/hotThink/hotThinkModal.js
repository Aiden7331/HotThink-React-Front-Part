import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Modal from 'react-bootstrap/Modal';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import React, {useState} from 'react';
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
      </Modal.Body>
    </Modal>
  );
}

const HotThinkModal = ({think}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

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
