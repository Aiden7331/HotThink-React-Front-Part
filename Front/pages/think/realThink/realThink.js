import React, {useEffect, useState} from 'react';
import Link from 'next/Link';
import {Row, Col, Icon, Pagination, Descriptions, Badge} from 'antd'
import RealThinkCard from "../../../components/cards/realThinkCard";
import ThinkBar from "../../../components/bars/thinkBar";
import Router, {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import qs from "qs";
import {listRealThinks} from "../../../modules/reducer/realThinks";

const RealThink = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [page,setPage] = useState(1);
    const [size,setSize] = useState(10);
    const {realThinks} = useSelector(({realThinks,loading,user,realThink})=>({
            realThinks: realThinks.realThinks,
            error: realThinks.error,
            loading:loading['realThinks/LIST_REAL_THINKS'],
            user:user.user,
        }));

    useEffect(() => {
        const {sb,sz,pg,category,ob} = qs.parse(router.query,{
            ignoreQueryPrefix: true,
        });
        dispatch(listRealThinks({
            sb,
            sz,
            pg,
            category,
            ob,
        }))
    }, [dispatch,router.query]);

    const onPageChange = (page,size) => {
        setPage(page);
        window.scrollTo(0,0);
        Router.push({
            pathname: '/think/realThink/realThink',
            query: { sb:0,sz:size,pg:page,category:'웹사이트',ob:0 }
        });
    };

    return(
        <>
            <Row type="flex" justify="center">
                <Col span={4}><ThinkBar/></Col>
                <Col span={16}>
                    <h3>리얼띵크 > IT <Link href="/think/realThink/realThinkWrite"><a><Icon style={{float:'right', marginTop:'10px', marginRight:'10px'}} type="form" /></a></Link></h3>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <RealThinkCard/>
                    <Pagination style={{textAlign:'center', margin:'30px'}} defaultCurrent={6} total={500} />
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    )
};

export default RealThink;