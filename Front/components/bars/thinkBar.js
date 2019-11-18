import React, {useState} from 'react';
import {Menu, Icon} from 'antd';
import Link from 'next/Link';

/*
    내용:Think에서의 좌측 네비게이션바
    rootSubMenuKeys => 대분류
    openKeys => 현재 작동중인 대분류
    onOpenPage => 대분류를 클릭했을 때 발생하는 로직
*/

const {SubMenu} = Menu;

const ThinkBar = () => {
    const rootSubmenuKeys = ['freeThink', 'hotThink', 'realThink'];
    const [openKeys, setOpenKeys] = useState(['freeThink']);

    const onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === 1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === 1) {
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
                key="freeThink"
                title={
                    <span>
              <Icon type="mail"/>
              <span>FreeThink</span>
            </span>
                }
            >


                <Menu.Item key="1"><Link href={{ pathname: '/think/freeThink/freeThink', query: { sb:0,sz:10,pg:1,category:'IT서비스',ob:0 }}}><a style={{textDecoration:'none'}}>IT</a></Link></Menu.Item>
                <Menu.Item key="2">기계</Menu.Item>
                <Menu.Item key="3">화학</Menu.Item>
                <Menu.Item key="4">의류</Menu.Item>
                <Menu.Item key="5">건축</Menu.Item>
                <Menu.Item key="6">금융</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
              <Icon type="appstore"/>
              <span>HotThink</span>
            </span>
                }
            >
                <Menu.Item key="7">
                    <Link href={{
                    pathname: '/think/hotThink/hotThink',
                    query: { sb:0,sz:10,pg:1,category:'IT서비스',ob:0 }}}
                    >
                        IT
                    </Link>
                </Menu.Item>
                <Menu.Item key="8">기계</Menu.Item>
                <Menu.Item key="9">화학</Menu.Item>
                <Menu.Item key="10">의류</Menu.Item>
                <Menu.Item key="11">건축</Menu.Item>
                <Menu.Item key="12">금융</Menu.Item>

            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                    <span>
              <Icon type="setting"/>
              <span>RealThink</span>
            </span>
                }
            >
                <Menu.Item key="13">
                    <Link href={{
                        pathname: '/think/realThink/realThink',
                        query: { sb:0,sz:10,pg:1,category:'IT서비스',ob:0 }}}
                    >
                        IT
                    </Link>
                </Menu.Item>
                <Menu.Item key="14">기계</Menu.Item>
                <Menu.Item key="15">화학</Menu.Item>
                <Menu.Item key="16">의류</Menu.Item>
                <Menu.Item key="17">건축</Menu.Item>
                <Menu.Item key="18">금융</Menu.Item>
            </SubMenu>
        </Menu>
    );

};

export default ThinkBar;