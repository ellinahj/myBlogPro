import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ThemeChange from '../../components/mypage/ThemeChange';
import { useSelector } from 'react-redux';
import Container from '../../components/common/Container';
import ProfileChange from '../../components/common/PhotoUpload';
import { theme, BasicTitle, BasicButton } from '../../utils/theme';
import { updateInfo, findNickname } from '../../api/user';
import { setUserInfo, setFont } from '../../actions/base';

export default function InfoContainer(props) {
  const { setShowEdit, showEdit, clickEdit } = props;
  const userInfo = useSelector(state => state.common.userInfo);
  const userColor = useSelector(state => state.common.userColor);
  const selectFont = useSelector(state => state.common.selectFont);
  const [changeImgFile, setChangeImgFile] = useState([]);
  const [prevImg, setPrevImg] = useState('');
  const [checkTimeout, setCheckTimeout] = useState(0);
  const [nickname, setNickname] = useState(undefined);
  const [mainTitle, setMainTitle] = useState('');
  const [nicknameAvailable, setNicknameAvailable] = useState(null);
  const [radioIndex, setRadioIndex] = useState(selectFont === `'Gothic A1', sans-serif` ? 0 : 1);

  const dispatch = useDispatch();
  const checked = index => {
    setRadioIndex(index);
  };
  const handlePhotoChange = (file, prevImg) => {
    setChangeImgFile(file);
    setPrevImg(prevImg);
  };

  const handleTitleChange = value => {
    setMainTitle(value);
  };

  useEffect(() => {
    userInfo && setNickname(userInfo.nickname);
  }, [userInfo]);

  useEffect(() => {
    userInfo && setMainTitle(userInfo.main_title);
  }, [userInfo]);

  useEffect(() => {
    if (setFont === `'Gothic A1', sans-serif`) {
      setRadioIndex(0);
    } else {
      setRadioIndex(1);
    }
  }, [selectFont]);

  const handleNicknameChange = value => {
    const replaceValue = value.replace(/\s/g, '');
    setNickname(replaceValue);
    setNicknameAvailable(null);
    checkTimeout && clearTimeout(checkTimeout);
    if (replaceValue.length === 0) {
      return;
    }
    if (!!replaceValue) {
      const timer = setTimeout(() => {
        const getToken = localStorage.getItem('mydiary_token');
        if (getToken) {
          const data = { nickname: replaceValue };
          findNickname(data).then(res => {
            if (res.status === 200) {
              if (res.data.message === 'available') {
                setNicknameAvailable(true);
              } else if (res.data.message === 'dupilicated') {
                setNicknameAvailable(false);
              }
            }
          });
        }
      }, 1000);
      setCheckTimeout(timer);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    changeImgFile && changeImgFile.forEach((item, index) => formData.append(`file`, item));
    let font = radioIndex;
    if (radioIndex === 0) {
      font = `'Gothic A1', sans-serif`;
    } else if (radioIndex === 1) {
      font = `'Nanum Myeongjo', serif`;
    }
    const data = {
      nickname: nickname,
      main_title: mainTitle,
      user_color: userColor,
      user_font: font
    };
    formData.append('data', JSON.stringify(data));
    const token = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    const config = {
      access_token: token
    };
    updateInfo(config, formData).then(res => {
      if (res.status === 200 && res.data) {
        dispatch(setUserInfo(res.data));
        clickEdit('changed');
        setShowEdit(false);
        dispatch(setFont(res.data.user_font));
        alert('변경되었습니다.');
      }
    });
  };

  const isSameNickname = !!userInfo && userInfo.nickname === nickname;
  const isDisabledBtn = (!nicknameAvailable && !isSameNickname) || !nickname;
  return (
    <Con>
      <Column>
        <Row>
          <TopCon>
            <ProfileChange
              clickEdit={clickEdit}
              imgFormData={handlePhotoChange}
              prevImg={setPrevImg}
              showEdit={showEdit}
            />
            <MarginRow>
              <Title>닉네임</Title>
              <InputCol>
                <InputRow>
                  {showEdit && userInfo ? (
                    <Input
                      name="nickname"
                      value={nickname}
                      placeholder="닉네임을 설정해보세요"
                      onChange={e => handleNicknameChange(e.target.value)}
                      maxLength="10"
                      autoComplete="off"
                    />
                  ) : (
                    userInfo && userInfo.nickname
                  )}
                  {showEdit && (
                    <CountRow>
                      <CountNickname>{nickname && nickname.length <= MAX_NICKNAME ? nickname.length : 0}</CountNickname>
                      <Slush>/</Slush>
                      <Maxcount>{MAX_NICKNAME}</Maxcount>
                    </CountRow>
                  )}
                </InputRow>

                {showEdit && nicknameAvailable === true && !isSameNickname && <Match>사용가능</Match>}
                {!isSameNickname && showEdit && nickname !== '' && nicknameAvailable === false && (
                  <Mismatch>이미사용중입니다.</Mismatch>
                )}
              </InputCol>
            </MarginRow>
            <MarginRow>
              <Title>대표문구</Title>
              <InputRow>
                {showEdit && userInfo ? (
                  <Input
                    name="main_title"
                    value={mainTitle}
                    onChange={e => handleTitleChange(e.target.value)}
                    autoComplete="off"
                  />
                ) : (
                  userInfo && userInfo.main_title
                )}
              </InputRow>
            </MarginRow>
            <MarginRow>
              <ThemeChange />
            </MarginRow>
            <MarginFontRow usercolor={userColor}>
              {showEdit ? <Title>폰트변경</Title> : <Title>폰트</Title>}
              {showEdit ? (
                <>
                  <Gothic>
                    <label className="radio_container center">
                      폰트1
                      <input type="radio" onChange={e => checked(0)} checked={radioIndex === 0} />
                      <span className="checkmark" />
                    </label>
                  </Gothic>
                  <NanumMyeongjo>
                    <label className="radio_container">
                      폰트2
                      <input type="radio" onChange={e => checked(1)} checked={radioIndex === 1} />
                      <span className="checkmark" />
                    </label>
                  </NanumMyeongjo>
                </>
              ) : (
                <>{radioIndex === 0 ? <Gothic>폰트1</Gothic> : <NanumMyeongjo>폰트2</NanumMyeongjo>}</>
              )}
            </MarginFontRow>
            <Row>
              {showEdit && (
                <SubmitBtn
                  disabled={isDisabledBtn}
                  available={!isDisabledBtn}
                  // available={(nickname !== undefined && userInfo.nickname === nickname) || nicknameAvailable === true}
                  onClick={handleSubmit}
                  usercolor={userColor}
                >
                  변경
                </SubmitBtn>
              )}
            </Row>
          </TopCon>
        </Row>
      </Column>
    </Con>
  );
}
const Con = styled(Container)`
  display: flex;
  justify-content: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 30px; */
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const MarginRow = styled(Row)`
  margin-bottom: 30px;
  align-items: center;
  @media (max-width: 780px) {
    display: block;
    margin-bottom: 40px;
  }
`;
const Title = styled.div`
  ${BasicTitle};
  width: 120px;
`;
const TopCon = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 20px 30px;
  @media (max-width: 780px) {
    padding: 15px;
  }
`;
const Input = styled.input`
  width: 170px;
  height: 20px;
`;
const SubmitBtn = styled.button`
  ${BasicButton};
  margin: 30px auto 0;
  padding: 5px 10px;
  font-size: ${theme.mFont};
  cursor: ${props => (props.available === true ? 'pointer' : 'not-allowed')};
`;
const Match = styled.div`
  color: ${theme.greenFont};
  margin: 10px 0 0 0;
  font-size: ${theme.sFont};
  display: flex;
  align-items: center;
`;
const Mismatch = styled.div`
  color: ${theme.redFont};
  margin: 10px 0 0 0;
  font-size: ${theme.sFont};
  display: flex;
  align-items: center;
`;
const InputCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputRow = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    margin-top: 15px;
  }
`;
const CountRow = styled.div`
  display: flex;
`;
const CountNickname = styled.div`
  color: #aaa;
  margin-left: 10px;
  font-size: ${theme.sFont};
`;
const Slush = styled.div`
  color: #aaa;
  margin: 0 2px 0;
  font-size: ${theme.sFont};
`;
const Maxcount = styled.span`
  color: #aaa;
  font-size: ${theme.sFont};
`;

const MarginFontRow = styled(Row)`
  margin-bottom: 20px;
  align-items: center;
  @media screen and (max-width: 780px) {
    display: block;
  }
  .end {
    margin-left: auto;
  }
  .center {
    display: flex;
    align-items: center;
  }
  .react-datepicker__input-container input {
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    padding-left: 5px;
    background: ${props => props.usercolor};
    outline: none;
    border: 0;
    border-radius: 5px;
    ::placeholder {
      color: #000;
    }
  }
  .radio_container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-right: 30px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .radio_container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0px;
    left: 0;
    height: 18px;
    width: 18px;
    background: #ddd;
    border-radius: 50%;
  }
  .radio_container:hover input ~ .checkmark {
    background-color: ${props => props.usercolor || '#aaa'};
  }
  .radio_container input:checked ~ .checkmark {
    background-color: ${props => props.usercolor || '#aaa'};
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .radio_container input:checked ~ .checkmark:after {
    display: block;
  }
  .radio_container .checkmark:after {
    top: 6px;
    left: 6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.usercolor || '#fff'};
  }
`;
const NanumMyeongjo = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  margin-right: 15px;
  @media screen and (max-width: 780px) {
    margin-top: 15px;
  }
`;
const Gothic = styled.div`
  font-family: 'Gothic A1', sans-serif;
  margin-right: 15px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    margin-top: 15px;
  }
`;

const MAX_NICKNAME = 10;
