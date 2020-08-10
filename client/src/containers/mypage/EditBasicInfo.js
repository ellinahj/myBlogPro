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
  const { setShowEdit, showEdit, clickEditPw, clickEdit } = props;
  const userInfo = useSelector(state => state.common.userInfo);
  const userColor = useSelector(state => state.common.userColor);
  const [changeImgFile, setChangeImgFile] = useState([]);
  const [prevImg, setPrevImg] = useState('');
  const [checkTimeout, setCheckTimeout] = useState(0);
  const [nickname, setNickname] = useState(undefined);
  const [mainTitle, setMainTitle] = useState('');
  const [nicknameAvailable, setNicknameAvailable] = useState(null);
  const [radioIndex, setRadioIndex] = useState(0);
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

  const handleNicknameChange = value => {
    // if (value.length > 0) {
    console.log(value, 'value');
    setNickname(value);
    setNicknameAvailable(null);
    checkTimeout && clearTimeout(checkTimeout);
    if (!!value) {
      const timer = setTimeout(() => {
        const getToken = localStorage.getItem('mydiary_token');
        if (getToken) {
          const data = { nickname: value };
          findNickname(data).then(res => {
            console.log(res, 'resrer');
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
      font = `'Nanum Myeongjo', serif`;
    } else if (radioIndex === 1) {
      font = `'Noto Sans KR', sans-serif`;
    } else if (radioIndex === 2) {
      font = `'Hi Melody', cursive`;
    }
    console.log(font, 'setF');
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
                {showEdit && !!nickname && nicknameAvailable === true && <Match>사용가능</Match>}
                {showEdit && !!nickname && nicknameAvailable === false && <Mismatch>이미사용중입니다.</Mismatch>}
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
            <MarginFontRow>
              <Title>폰트변경</Title>
              {showEdit && (
                <>
                  <NanumMyeongjo>
                    <label className="radio_container" userColor={userColor}>
                      폰트1
                      <input type="radio" onChange={e => checked(0)} checked={radioIndex === 0} />
                      <span className="checkmark" />
                    </label>
                  </NanumMyeongjo>
                  <NotoSansKR>
                    <label className="radio_container center" userColor={userColor}>
                      폰트2
                      <input type="radio" onChange={e => checked(1)} checked={radioIndex === 1} />
                      <span className="checkmark" />
                    </label>
                  </NotoSansKR>
                  <NanumPen>
                    <label className="radio_container" userColor={userColor}>
                      폰트3
                      <input type="radio" onChange={e => checked(2)} checked={radioIndex === 2} />
                      <span className="checkmark" />
                    </label>
                  </NanumPen>
                </>
              )}
            </MarginFontRow>
            <Row>
              {showEdit && (
                <SubmitBtn
                  disabled={nickname === '' || nicknameAvailable === false}
                  available={nicknameAvailable === true}
                  onClick={handleSubmit}
                  userColor={userColor}
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
  @media screen and (max-width: 780px) {
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
`;
const Input = styled.input`
  width: 120px;
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
    background: #eee;
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
    background: ${props => props.userColor || '#aaa'};
    border-radius: 50%;
  }
  .radio_container:hover input ~ .checkmark {
    background-color: ${props => props.userColor || '#aaa'};
  }
  .radio_container input:checked ~ .checkmark {
    background-color: ${props => props.userColor || '#aaa'};
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
    background: ${props => props.userColor || '#fff'};
  }
`;
const NanumMyeongjo = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  margin-right: 15px;
  @media screen and (max-width: 780px) {
    margin-top: 15px;
  }
`;
const NotoSansKR = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin-right: 15px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    margin-top: 15px;
  }
`;

const NanumPen = styled.div`
  font-family: 'Hi Melody', cursive;
  @media screen and (max-width: 780px) {
    margin-top: 15px;
  }
`;
const MAX_NICKNAME = 10;
