import React, {useState} from 'react';
import {Menu, Icon} from 'antd';
import Link from 'next/Link';

const {SubMenu} = Menu;

const MyPageBar = ({num}) => {
    const rootSubmenuKeys = ['sub1', 'sub2'];
    const [openKeys, setOpenKeys] = useState(['sub1']);


    const onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(openKeys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{display: "inline-block", top: '57px', width: '100%', height: '91vh', position: 'sticky'}}
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
              <Icon type="mail"/>
              <span>내 정보</span>
            </span>
                }
            >
                <Menu.Item key="1" ><Link href='/mypage/dashboard'>홈</Link></Menu.Item>
                <Menu.Item key="2"><Link href='/mypage/messages'>쪽지</Link></Menu.Item>
                <Menu.Item key="3"><Link href='/mypage/report'>신고 접수 내용</Link></Menu.Item>
                <Menu.Item key="4"><Link href='/mypage/mytrade'>거래 내역</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
              <Icon type="setting"/>
              <span>설정</span>
            </span>
                }
            >
                <Menu.Item key="6">프로필 설정</Menu.Item>
                <Menu.Item key="7">알림 설정</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default MyPageBar;