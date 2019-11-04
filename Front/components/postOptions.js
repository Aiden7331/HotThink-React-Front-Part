import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import {Modal} from "react-bootstrap";
import FreeThinkUpdate from "../container/freeThinkUpdate";
import {deleteFreeThink} from "../modules/api/think";
import {useDispatch} from "react-redux";
import {setOriginalFreeThink} from "../modules/reducer/freeThink";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const PostOptions = ({think}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [updateShow,setUpdateShow] = useState(false);

    const handleClickListItem = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onClickDelete = async(e) =>{
        e.preventDefault();
        try{
            await deleteFreeThink(think.bdSeq);
            console.log(think.bdSeq);
            handleClose();
        }catch (e) {
            console.log(e);
        }
    };
    const onclickUpdate = () => {
        setUpdateShow(true);
        handleClose();
        dispatch(setOriginalFreeThink);
    };

    return (
        <div className={classes.root}>
            <IconButton aria-label="settings" onClick={handleClickListItem}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={onclickUpdate}
                >
                    수정
                </MenuItem>
                <MenuItem
                    onClick={onClickDelete}
                >
                    삭제
                </MenuItem>
            </Menu>
            <Modal
                show={updateShow}
                onHide={() => setUpdateShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        FreeThink 수정
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FreeThinkUpdate think={think}/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PostOptions;