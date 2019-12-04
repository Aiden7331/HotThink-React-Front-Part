import React, { useEffect, useState } from 'react';
import ProfileImgForm from '../../components/mypage/profileImgForm';
import {
  Row, Col,
  Typography, Checkbox,
  Input,
  Button
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, changeField, check } from '../../modules/reducer/user';
const { Text } = Typography;
const CheckboxGroup = Checkbox.Group;

const ProfileUpdate = ( {user, close } ) => {
  const dispatch = useDispatch();

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'userUpdate',
        key: name,
        value
      })
    );
  };

  const { token, updateForm, updateError } = useSelector(({ auth, user }) => ({
    token: auth.auth,
    updateForm: user.userUpdate,
    updateError: user.userUpdateError,
  }));

  //수정 성공/실패처리
  useEffect(() => {
    if(updateError==="Success"){
      close();
    }
    else if (updateError) {
      console.log(updateError);
      //이미 존재하는 닉네임 일 때
      if (updateError.response.status === 408) {
        setError('이미 존재하는 닉네임입니다.');
        return;
      }
    }
  }, [updateForm, updateError, dispatch]);

  const plainOptions = ['게임', '디자인', '마켓팅', '모바일', '사물인터넷', '웹사이트', '컨텐츠', '유틸리티'];
  const [preferenceList, setPreferenceList] = useState(updateForm.preferenceList);
  const [error, setError] = useState("");
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(updateForm.preferenceList.size === 8);

  const preferenceListChange = (preferenceList) => {
    console.log(preferenceList);
    setPreferenceList(preferenceList);
    setIndeterminate(!!preferenceList.length && preferenceList.length < plainOptions.length);
    setCheckAll(preferenceList.length === plainOptions.length);
    preferenceDispatch(preferenceList)
  };
  const preferenceListAllChange = (e) => {
    const list = e.target.checked ? plainOptions : [];
    setPreferenceList(list);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    preferenceDispatch(list);
  };

  const preferenceDispatch = ( preferenceList ) => {
    dispatch(
      changeField({
        form: 'userUpdate',
        key: 'preferenceList',
        value: preferenceList,
      })
    );
  }

  const onSubmit = e => {
    e.preventDefault();

    const { nickName, pw, pwck, tel, preferenceList } = updateForm;

    //비번 비번확인 불일치시
    if (pw !== pwck) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (preferenceList.length === 0) {
      setError('관심분야를 하나라도 선택 해주세요!');
      return;
    }

    dispatch(updateUser({
      nickName,
      tel,
      pw,
      preferenceList,
    }));
  };

  const changeCheck = () => {
    if(updateForm.nickName===user.nickName
      &&updateForm.tel===user.tel
      &&updateForm.pw===user.pw
      &&updateForm.pwck===user.pw
      &&updateForm.preferenceList===user.preferenceList) return true;
  };

  return (
    <>
      <div style={{
        marginLeft: '20%',
        marginRight: '20%',
        fontFamily: 'Noto Sans KR',
      }}>
        <Row>
          <Col span={18}>
            <Row type={'flex'}>
              <Col span={10}>
                <Text strong>닉네임</Text>
                <Input size='large'
                       name="nickName"
                       maxLength={20}
                       value={updateForm.nickName}
                       defaultValue={user.nickName}
                       onChange={onChange}
                />
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 10 }}>
              <Col span={10}>
                <Text strong>비밀번호</Text>
                <Input.Password size='large'
                                name="pw"
                                defaultValue={user.pw}
                                onChange={onChange}
                                maxLength={20}/>
              </Col>
              <Col span={10}>
                <Text strong>비밀번호 확인</Text>
                <Input.Password size='large'
                                name="pwck"
                                defaultValue={user.pw}
                                onChange={onChange}
                                maxLength={20}/>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col span={8}>
                <Text strong>전화번호</Text>
                <Input size='large'
                       name="tel"
                       defaultValue={ user.tel }
                       placeholder={'010'}
                       onChange={onChange}
                       maxLength={11}/>
              </Col>
            </Row>
          </Col>

          <Col style={{ float: 'right' }}>
            <ProfileImgForm/>
          </Col>
        </Row>
        <div style={{
          marginTop: 20,
          fontFamily: 'Noto Sans KR',
          fontWeight: 700,
        }}>
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={indeterminate}
              onChange={preferenceListAllChange}
              checked={checkAll}
            >
              Check all
            </Checkbox>
          </div>
          <br/>
          <CheckboxGroup
            options={plainOptions}
            value={preferenceList}
            onChange={preferenceListChange}
          />
        </div>

        <Row>
          <Text
            style={{
              color: 'red',
              marginTop: 20,
              float: 'right'
            }}
          >
            {error}
          </Text>
        </Row>

        <Row>
          <Button type={'primary'} size={'large'}
                  style={{
                    marginTop: 20,
                    float: 'right',
                  }}
                  disabled={changeCheck()}
                  onClick={onSubmit}
          >수정</Button>
        </Row>
      </div>

    </>
  );
};

export default ProfileUpdate;
