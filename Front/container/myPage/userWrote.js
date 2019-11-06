import { List, Avatar, Icon } from 'antd';
import React from 'react';
import {useSelector} from "react-redux";

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

const UserWrote = ({user}) => {
    return(
        <>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={user}
                renderItem={ item=> (
                    <List.Item
                        key={item}
                        actions={[
                            <IconText type="star-o" text={item.hits} key="list-vertical-star-o" />,
                            <IconText type="like-o" text={item.good} key="list-vertical-like-o" />,
                            <IconText type="message" text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.contents}
                    </List.Item>
                )}
            />
        </>
    );
};

export default UserWrote;
