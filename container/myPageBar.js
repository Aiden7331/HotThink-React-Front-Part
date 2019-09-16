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
                <Menu.Item key="1">대시보드</Menu.Item>
                <Menu.Item key="2">내가 쓴 글</Menu.Item>
                <Menu.Item key="3">스크랩</Menu.Item>
                <Menu.Item key="4">판매 이력</Menu.Item>
                <Menu.Item key="5">구매 이력</Menu.Item>
                <Menu.Item key="6">Q&A</Menu.Item>
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
                <Menu.Item key="7">프로필 설정</Menu.Item>
                <Menu.Item key="8">알림 설정</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default MyPageBar;