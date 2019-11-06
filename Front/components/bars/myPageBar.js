import React, {useState} from 'react';
import {Menu, Icon} from 'antd';
import Link from 'next/Link';

const {SubMenu} = Menu;

//마이페이지에서의 왼쪽 내비게이션바
const MyPageBar = ({num}) => {
    const rootSubmenuKeys = ['myInfo', 'settings'];
    const [openKeys, setOpenKeys] = useState(['myInfo']);

    const onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === 1);
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
                key="myInfo"
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
                key="settings"
                title={
                    <span>
              <Icon type="setting"/>
              <span>설정</span>
            </span>
                }
            >
                <Menu.Item key="5">프로필 설정</Menu.Item>
                <Menu.Item key="6">알림 설정</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default MyPageBar;