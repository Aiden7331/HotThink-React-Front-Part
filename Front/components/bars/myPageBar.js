import React, { useState } from 'react';
import { Menu, Icon, Button, Switch } from 'antd';
import Link from 'next/Link';

const { SubMenu } = Menu;

const MyPageBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  const items = ['dashboard', 'message', 'report', 'trade', 'follow'];

  // const keyInit = (think) => {
  //   if (think === 'Free Think') {
  //     return 'sub1';
  //   } else if (think === 'Hot Think') {
  //     return 'sub2';
  //   } else {
  //     return 'sub3';
  //   }
  // };

  const iconTypeInit = (item) => {
    if (item === 'dashboard') {
      return 'user';
    } else if (item === 'message') {
      return 'message';
    } else if (item === 'report') {
      return 'alert';
    } else if (item === 'trade') {
      return 'dollar';
    } else if (item === 'follow'){
      return 'usergroup-add';
    }
  };

  const iconColorInit = (item) => {
    if (item === 'message') {
      return '#00CCCC';
    } else if (item === 'report') {
      return 'red';
    } else if (item === 'trade') {
      return 'green';
    }
  };

  const itemTextInit = (item) => {
    if (item === 'dashboard') {
      return '마이페이지';
    } else if (item === 'message') {
      return '메세지';
    } else if (item === 'report') {
      return '신고 내역';
    } else if (item === 'trade') {
      return '거래 내역';
    } else if (item === 'follow'){
      return '팔로우';
    }
  };

  const hrefInit = (item) => {
    if (item === 'dashboard') {
      return '';
    } else if (item === 'message') {
      return 'message';
    } else if (item === 'report') {
      return 'report';
    } else if (item === 'trade') {
      return 'mytrade';
    } else if (item === 'follow') {
      return 'follow';
    }
  };
  return (
    <div style={{
      height: '100%',
    }}>
      <Menu
        style={{
          height: '100%',
          backgroundColor: 'white',
          fontFamily: 'Noto Sans KR',
          fontWeight: '700',
          borderColor: '#ced4da',
          borderWidth: '1px',
          borderRightStyle: 'solid'
        }}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <div style={{
          textAlign: 'left',
          width: '100%',
          padding: 16,
        }}>
          <Button onClick={toggleCollapsed}>
            <Icon
              type={collapsed ? 'fullscreen' : 'fullscreen-exit'}
              style={{ color: '#64b5f6' }}
            />
          </Button>
        </div>

        {
          items.map(item =>
            <Menu.Item>
              <Link href={'/mypage/' + hrefInit(item)}>
                <span>
                    <Icon type={iconTypeInit(item)}
                          style={{
                            color: iconColorInit(item),
                            fontSize: 25
                          }}/>
                    <span style={{
                      fontSize: 17,
                      color: 'black',
                    }}>{itemTextInit(item)}</span>
                </span>
              </Link>
            </Menu.Item>
          )
        }

        <SubMenu
          title={
            <span>
                  <Icon type="notification"
                        style={{
                          color: 'blue',
                          fontSize: 25
                        }}
                  />
                  <span style={{
                    color: 'black',
                    fontSize: 17
                  }}>
                      알람 설정
                  </span>
                </span>
          }
        >
          <div style={{
            borderRadius: '10px',
            padding: '10px',
            textAlign: 'center',
          }}>
            <Switch defaultChecked onChange={onChange}/>
          </div>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MyPageBar;
