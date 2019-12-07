import React, {useState} from 'react';
import {useRouter, Router} from 'next/router';
import {Pagination, Tag} from 'antd';
import HotThinkPanel from '../../container/hotThink/hotThinkPanel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import HotThinkCard from "../../components/hotThink/hotThinkCard";
import CardHeader from "@material-ui/core/CardHeader";
import HotThinkModal from "../../components/hotThink/hotThinkModal";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    card: {
        textAlign: 'center',
        maxWidth: 345,
        maxHeight: '40%',
        marginRight: '1%'
    },
    media: {
        height: 0,
        width: 345,
        paddingTop: '56.25%', // 16:9
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    },
    tap: {
        outline: 'none'
    },
}));

const dummy = [
    {
        title: '종합정보시스템',
        contents: ' 모든 정보를 종합하여 검색하는데에 시간을 낭비할 필요 없이 원하는 키워드로 찾을 수 있도록...',
        date: '2019-12-05 10:13:44',
        src: '/static/images/종합정보시스템.jpg',
        init:'이',
        cate:'웹사이트'
    },
    {
        title: '핫띵크!',
        contents: '유저가 하나의 아이디어가 있다면 커뮤니티와 같은 프리띵크 게시판에 올립니다. 이 후 유저들에...',
        date: '2019-12-05 13:12:11',
        src: '/static/images/idea.png',
        init:'강',
        cate:'웹사이트'
    },
    {
        title: 'Darkest Dungeon',
        contents: '다키스트 던전은 상상할 수 있는 모든 고난을 구현해놓은 게임입니다. 원정은 끊임없이 실패하고...',
        date: '2019-12-05 15:24:41',
        src: '/static/images/darkest3.jpg',
        init:'박',
        cate:'웹사이트'
    },
    {
        title: '소리바다',
        contents: '무료 음악 플레이 재생이 가능한 사이트, 자신이 원하는 노래목록을 만들어 간직하시고, 노래방...',
        date: '2019-12-05 17:03:11',
        src: '/static/images/소리바다.jpg',
        init:'이',
        cate:'유틸리티'
    },
    {
        title: '어카운트킬러',
        contents: '해외에 자신의 명의로 가입한 사이트를 한눈에 알게 해주는 사이트, 까먹고 방치해두었던 내 개...',
        date: '2019-12-05 21:22:11',
        src: '/static/images/어카운트킬러.jpg',
        init:'최',
        cate:'웹사이트'
    },
    {
        title: '파일론',
        contents: '온라인 웹하드 사이트, 이제부턴 모든 영상을 사고 팔 수 있습니다. 무료 p2p 사이트 많은 회원...',
        date: '2019-12-06 03:59:39',
        src: '/static/images/파일론.jpg',
        init:'김',
        cate:'웹사이트'
    },
    {
        title: '협찬GAGE',
        contents: '당신도 연예인처럼 화장품과 악세사리, 옷까지 협찬 받을 수 있습니다. 다 같이 연에인이 된 기...',
        date: '2019-12-06 09:03:11',
        src: '/static/images/협찬.jpg',
        init:'피',
        cate:'유틸리티'
    },
    {
        title: '아이디어몰',
        contents: ' 기발한 아이디어 상품들을 모아서 판매를 해주는 사이트입니다. 새롭고 기발한 아이디어들이 많...',
        date: '2019-12-06 15:22:48',
        src: '/static/images/아이디어몰.png',
        init:'장',
        cate:'유틸리티'
    },
    {
        title: 'ProTO',
        contents: '불법이 아닌 합법적인 도박입니다. 나라에 하는 사업이기 때문에 뒷통수를 맞을 일 또한 없기에...',
        date: '2019-12-07 00:01:59',
        src: '/static/images/프로토.png',
        init:'김',
        cate:'컨텐츠'
    }
];

const MyHotThink1 = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const categories = ['게임', '디자인', '마켓팅', '모바일', '사물인터넷', '웹사이트', '컨텐츠', '유틸리티'];
    const categoryImageFunction = (category) => {
        if (category === '게임') return '/static/images/game.jpg';
        else if (category === '디자인') return '/static/images/design.jpg';
        else if (category === '마켓팅') return '/static/images/marketing.jpg';
        else if (category === '모바일') return '/static/images/mobile.jpg';
        else if (category === '사물인터넷') return '/static/images/iot.jpg';
        else if (category === '유틸리티') return '/static/images/program.jpg';
        else if (category === '웹사이트') return '/static/images/webpage.jpg';
        else if (category === '컨텐츠') return '/static/images/contents.jpg';
    };

    return (
        <>
            <div style={{marginLeft:'180px'}}>
                <div>
                    <HotThinkCard data={dummy[0]}/>
                    <HotThinkCard data={dummy[2]}/>
                    <HotThinkCard data={dummy[3]}/>
                </div>
                <div>
                    <HotThinkCard data={dummy[4]}/>
                    <HotThinkCard data={dummy[5]}/>
                    <HotThinkCard data={dummy[6]}/>
                </div>
                <div>
                    <HotThinkCard data={dummy[7]}/>
                    <HotThinkCard data={dummy[8]}/>
                </div>
            </div>
        </>
    );
};

export default MyHotThink1;
