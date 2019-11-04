import React,{useState,useEffect} from 'react';
import ThinkBar from "../components/bars/thinkBar";
import {Row,Col,List,Avatar,Icon,Pagination} from 'antd';
import {Modal} from 'react-bootstrap';
import FreeThinkWrite from "../container/freeThinkWrite";
import FreeThinkCard from "../components/cards/freeThinkCard";
import {useDispatch, useSelector} from "react-redux";
import {listFreeThinks} from "../modules/reducer/freeThinks";
import qs from 'qs';
import {useRouter} from 'next/router';

const FreeThink =() => {
    const router = useRouter();
    const [writeShow,setWriteShow] = useState(false);
    const {freeThinks,error,loading,user} = useSelector(
        ({freeThinks,loading,user})=>({
            freeThinks: freeThinks.freeThinks,
            error: freeThinks.error,
            loading:loading['freeThinks/LIST_FREE_THINKS'],
            user:user.user,
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
    }, [dispatch,router.query]);

    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>프리띵크 > IT<a onClick={()=>setWriteShow(true)}><Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" /></a></h3>
                    {freeThinks.map((c) => {
                        return (
                            <FreeThinkCard key={c.id} think={c} />
                        );
                    })}

                    <Pagination style={{textAlign:'center', margin:'30px'}} defaultCurrent={1} total={500} />
                </Col>
                <Col span={4}></Col>
            </Row>
            <Modal
                show={writeShow}
                onHide={() => setWriteShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
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

FreeThink.getInitialProps = async (context) => {
    context.store.dispatch(listFreeThinks({
        sb:0,
        sz:10,
        pg:1,
        category:'IT서비스',
        ob:0,
    }));
};

export default FreeThink;