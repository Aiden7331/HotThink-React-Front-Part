import React,{useState,useEffect} from 'react';
import ThinkBar from "../../../components/bars/thinkBar";
import {Row,Col,List,Avatar,Icon,Pagination} from 'antd';
import {Modal} from 'react-bootstrap';
import FreeThinkWrite from "../../../container/freeThink/freeThinkWrite";
import FreeThinkCard from "../../../components/cards/freeThinkCard";
import {useDispatch, useSelector} from "react-redux";
import {listFreeThinks} from "../../../modules/reducer/freeThinks";
import qs from 'qs';
import {useRouter} from 'next/router';
import Router from 'next/router';
import {closeModal, openModal} from "../../../modules/reducer/freeThink";

const FreeThink =() => {
    const router = useRouter();
    const [page,setPage] = useState(1);
    const [size,setSize] = useState(10);
    const {freeThinks,isOpen} = useSelector(
        ({freeThinks,loading,user,freeThink})=>({
            freeThinks: freeThinks.freeThinks,
            error: freeThinks.error,
            loading:loading['freeThinks/LIST_FREE_THINKS'],
            user:user.user,
            isOpen:freeThink.isOpen,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        const {sb,sz,pg,category,ob} = qs.parse(router.query,{
            ignoreQueryPrefix: true,
        });
        dispatch(listFreeThinks({
            sb,
            sz,
            pg,
            category,
            ob,
        }))
    }, [dispatch,router.query,isOpen]);

    const onPageChange = (page,size) => {
        setPage(page);
        window.scrollTo(0,0);
        Router.push({
            pathname: '/think/freeThink/freeThink',
            query: { sb:0,sz:size,pg:page,category:'IT서비스',ob:0 }
        });
    };

    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3 style={{display:'inline-block'}}>프리띵크 > IT</h3>
                    <a onClick={()=>dispatch(openModal())}>
                        <Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" />
                    </a>
                    {freeThinks.map((c) => {
                        return (
                            <FreeThinkCard key={c.id} think={c} />
                        );
                    })}
                    <Pagination
                        style={{textAlign:'center', margin:'30px'}}
                        total={20}
                        pageSize={size}
                        current={page}
                        onChange={onPageChange}
                    />
                </Col>
                <Col span={4}></Col>
            </Row>
            <Modal
                show={isOpen}
                onHide={() => dispatch(closeModal())}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{fontWeight:700}} id="example-custom-modal-styling-title">
                        FreeThink 작성
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FreeThinkWrite/>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default FreeThink;