import React, {useState} from 'react';
import {Menu, Icon} from 'antd';

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
                <Menu.Item key="1">홈</Menu.Item>
                <Menu.Item key="2">쪽지</Menu.Item>
                <Menu.Item key="3">신고 접수 내용</Menu.Item>
                <Menu.Item key="4">거래 내역</Menu.Item>
                <Menu.Item key="5">Q&A</Menu.Item>
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