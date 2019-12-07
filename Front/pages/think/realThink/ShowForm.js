import React, {useCallback, useState} from 'react';
import 'antd/dist/antd.css';
import {Badge, Descriptions} from 'antd';
import {Carousel} from "react-bootstrap";
import {Tag} from 'antd';
import RealThinkImage from "./RealThinkImage";
import ImagesZoom from "./ImagesZoom";

const ShowForm = ({data,onZoom}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <>
            <Descriptions title="제목" layout="vertical" bordered>
                <Descriptions.Item label="아이디어 명칭" span={3}>어느곳에서도 찾지 못했던 판타지 MMORPG</Descriptions.Item>
                <Descriptions.Item label="등록자">강태구</Descriptions.Item>
                <Descriptions.Item label="발명자">강태구</Descriptions.Item>
                <Descriptions.Item label="권리자(출원인)">강태구</Descriptions.Item>
                <Descriptions.Item label="분야">
                    <Tag color="magenta">Game</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="진행상황"><Badge status="processing" text="거래준비"/></Descriptions.Item>
                <Descriptions.Item label="희망가격">10,400,000 원</Descriptions.Item>
                <Descriptions.Item label="개요" span={3}>
                    지금까지 생각했던 RPG 게임은 잊어버리십시오. 우리는 어렸을적 모두 하늘을 날아다니고 오크를 베어넘기던 한 명의 영웅이었습니다. 지금 당장 그 꿈을 현실로 바꿀 때입니다. 다시 한번 그 때로 돌아가 길드원들과 세상을 다스려보세요...
                </Descriptions.Item>
                <Descriptions.Item label="핵심내용" span={3}>
                    세계의 탄생<br/><br/>
                    태초의 세상은 혼돈이었다. 하지만 규칙이 만들어지면서, 혼돈이었던 세상은 질서의 세계와 무질서의 세계로 갈라진다.
                    태초의 세상은 혼돈으로 가득 차 있었다. 그러한 세상에 질서가 생겨나면서 혼돈으로 가득 차 있던 세계는 붕괴를 일으켜 두 개로 갈라졌다. 질서의 신 루페온은 불완전함 속에 자리잡은 자신의 세계에 여러 가지 규칙들을 만들어내기 시작했다. 루페온은 대우주 오르페우스를 창조하고 공간을 메울 별을 만든 뒤, 절대 꺼지지 않을 태초의 빛 아크를 이용해 태양을 띄웠다. 그러나 무한한 태양과는 달리 별은 유한하여 생성되고 소멸되길 반복했다. 질서는 생명을 창조하였으나 죽음이란 그림자 또한 만들어 버린 것이다. 불완전한 질서의 세계를 관망하던 혼돈의 신 이그하람은 무한한 생명을 가진 아크에 흥미를 가지기 시작했다. 소멸하지 않는 아크야말로 혼돈의 결정체라 생각했던 이그하람의 시선은 아주 오랜 시간을 거쳐 서서히 탐욕으로 변하게 되었다.<br/>
                    <br/>
                    <br/>
                    일곱 신과 일곱 종족의 탄생
                    <br/><br/>
                    루페온이 만든 일곱 신 중 조화의 신 기에나가 생명의 원천인 바다를 창조한 이후, 하나의 대륙은 여러 개로 쪼개져 각기 다른 모습을 지니게 되었다. 초기에 루페온은 각 대륙에 자리잡은 아크라시아의 종족들을 위해 아크의 힘을 나누어 주었고, 종족들은 빠르게 발전해 나갔다. 그러나 아크의 힘으로 인해 아크라시아의 종족들은 교만해졌으며, 타락하여 신의 질서에 대항하기에 이른다. 이에 분노한 루페온은 종족들로부터 아크의 힘을 다시 빼앗아 일곱 개의 조각으로 분리해 신들에게 나누어 주었다. 그리고 일곱 신에게 새로운 종족들을 창조할 것을 명했다.<br/>
                </Descriptions.Item>
                <Descriptions.Item label="차별성" span={3}>
                    단발성 연출은 대부분의 사람들이 호평을 하고 있는 부분이다. 특히 DX9으로 최적화를 어떻게 했는지 의문스러운[7] 영광의 벽과 왕의 무덤 같은 인스턴스 던전, 광기의 축제가 특유의 장엄한 규모와 적절한 배경음악 덕분에 상당히 호평을 받고 있다. 또한 규모의 연출만 고집하는게 아니라 루테란을 벗어나면 스케일을 이용한 웅장한 연출이 줄어들고 세세한 디테일을 살리는 연출로 전환되며 여러모로 신선함을 안겨주는 편이다.
                    <br/>
                    <br/>
                    혹평 파트 전반에 언급되었듯 메인스토리에 대한 평가는 전체적으로 박하지만 서브퀘스트는 평이 꽤 좋은 편이다. 어떤 화가가 영감을 얻기 위해 이삭이라도 주워보라고 요구한다든가,[8] 사이드 퀘스트 이름이 어리다고 놀리지 말아요라든가, 루테란에서 특성변화 하는 npc 대사 중에 '어이쿠 손이 미끄러질 뻔했네'가 있는 등등 깨알같은 개그와 패러디가 많고, 메인퀘스트 이후 등장하는 수많은 모험 퀘스트들도 제각각 색채가 다른 특성 있는 스토리를 갖고 있다.[9] 사실 로스트아크의 부족한 플롯이나 스토리텔링 능력을 보았을 때 이야기를 길게 끌지 않고 비교적 빠르게 전개하는 서브퀘스트의 평가가 상대적으로 더 높을 수밖에 없다.
                    <br/>
                    <br/>
                    상대적으로 스토리적 디테일이 살아있다는점도 장점으로 볼 수 있다. 직업별로 대사가 조금씩 다른것[10] 해당 지역의 뒷배경을 모험의 서로 풀어낸것이라던가 호감도 퀘스트를 통한 캐릭터들의 자잘한 뒷배경을 알려주는등 이런저런 설정을 보는 재미가 있다. 다만 메인퀘스트로 둬야할 내용과 서브로 둬야할 내용이 혼재되어있어 메인스토리에 이입이 잘 안되는 흠이 존재한다.
                </Descriptions.Item>
            </Descriptions>
            <RealThinkImage onZoom={onZoom} data={data}/>
        </>
    )
};
export default ShowForm;