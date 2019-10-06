import React, {useState} from 'react';
import {Menu, Icon} from 'antd';
import Link from 'next/Link';

const {SubMenu} = Menu;

class ThinkBar extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{display: "inline-block", top: '57px', width: '100%', height: '91vh', position: 'sticky'}}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <Icon type="mail"/>
              <span>FreeThink</span>
            </span>
                    }
                >
                    <Menu.Item key="1"><Link href='/freeThink'>IT</Link></Menu.Item>
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
                    <Menu.Item key="7"><Link href='/HotThink'>IT</Link></Menu.Item>
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
                    <Menu.Item key="13"><Link href='/RealThink'>IT</Link></Menu.Item>
                    <Menu.Item key="14">기계</Menu.Item>
                    <Menu.Item key="15">화학</Menu.Item>
                    <Menu.Item key="16">의류</Menu.Item>
                    <Menu.Item key="17">건축</Menu.Item>
                    <Menu.Item key="18">금융</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
};

export default ThinkBar;