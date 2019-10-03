import { List, Avatar } from 'antd';

const data = [
    {
        title: '알림1',
    },
    {
        title: '알림2',
    },
    {
        title: '알림3',
    },
    {
        title: '알림4',
    },
    {
        title: '알림5',
    },
    {
        title: '알림6',
    },
    {
        title: '알림7',
    },
    {
        title: '알림8',
    },
    {
        title: '알림9',
    },
    {
        title: '알림10',
    },
    {
        title: '알림11',
    },
];

const Notice = () => {
    return(
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="공지사항이 업데이트 되었습니다."
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default Notice;