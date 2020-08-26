import styled, { css } from 'styled-components';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactCrop from 'react-image-crop';
import { BlueEditBtn } from '../../utils/theme';

export default function Upload(props) {
  const { imgFormData, prevImg, showEdit, clickEdit } = props;
  const [file, setFile] = useState([null]);
  const [upImg, setUpImg] = useState([]);
  const [crop, setCrop] = useState({ unit: '%', width: 100, aspect: 1 });
  const [previewUrl, setPreviewUrl] = useState([null]);
  const [index, setIndex] = useState(null);
  const [filename, setFilename] = useState('');
  const [fileInfo, setFileInfo] = useState('');
  const imgRef = useRef(null);
  const userColor = useSelector(state => state.common.userColor);
  const userInfo = useSelector(state => state.common.userInfo);
  let inputRefs = useRef([]);
  const controlFileBtn = (e, index) => {
    e.preventDefault();
    inputRefs.current[index].click();
  };

  const addImg = (e, index) => {
    setIndex(index);
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setFilename(e.target.files[0].name);
      setFileInfo(e.target.files[0].type);
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = async crop => {
    if (imgRef.current && crop.width && crop.height) {
      createCropPreview(imgRef.current, crop, filename);
    }
  };

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(previewUrl);
        const tempPreviewUrl = [...previewUrl];
        tempPreviewUrl.splice(index, 1, window.URL.createObjectURL(blob));
        setPreviewUrl(tempPreviewUrl);
        prevImg(tempPreviewUrl);

        const blobToFile = new File([blob], filename);
        const tempFile = [...file];
        tempFile.splice(index, 1, blobToFile);
        setFile(tempFile);
      }, fileInfo);
    }).catch(err => {
      console.log('blob promise err', err);
    });
  };
  useEffect(() => {
    imgFormData(file);
  }, [file]);

  useEffect(() => {
    setUpImg([]);
  }, [showEdit]);

  return (
    <Row>
      <TitleCenter>
        <span onClick={e => clickEdit(e)}>프로필변경</span>
      </TitleCenter>
      <ProfileRow>
        <ProfileCenter>
          {showEdit && (
            <EditWrap>
              <EditImg src={'/images/edit.svg'} width={16} onClick={e => controlFileBtn(e, 0)} />
            </EditWrap>
          )}

          <input
            name="file"
            type="file"
            accept="image/*"
            ref={ref => (inputRefs.current[0] = ref)}
            style={{ display: 'none' }}
            onChange={e => addImg(e, 0)}
          />

          {showEdit && previewUrl && previewUrl[0] ? (
            <Img src={previewUrl[0]} width={70} />
          ) : (
            <Img
              src={userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png'}
              width={70}
            />
          )}
        </ProfileCenter>
      </ProfileRow>
      {showEdit && (
        <ProfileRow>
          <ReactCropDiv
            userColor={userColor}
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={img => setCrop(img)}
            onComplete={makeClientCrop}
            uploadImg={upImg}
          />
        </ProfileRow>
      )}
    </Row>
  );
}
const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const PreviewImg = styled.img`
  width: 100%;
`;
const ImageRow = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0 20px;
`;
const TitleCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;

  span {
    ${props => props.theme.BlueEditBtn};
    font-size: ${props => props.theme.mFont};
  }
`;

const ProfileCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ReactCropDiv = styled(ReactCrop)`
  margin-bottom: ${props => (props.uploadImg.length > 0 ? '20px' : '0px')};
  width: ${props => props.uploadImg.length && '200px'};
  height: ${props => props.uploadImg.length && '200px'};
`;
const EditImg = styled.img`
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
`;
const EditWrap = styled.div`
  cursor: pointer;
  background-color: #666;
  position: absolute;
  bottom: 0;
  left: 46px;
  margin-right: 0;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 0;
  border: 1px solid #ddd;
`;
