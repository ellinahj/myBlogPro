import styled, { css } from 'styled-components';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactCrop from 'react-image-crop';

export default function Upload(props) {
  const { imgFormData } = props;
  const [file, setFile] = useState([null, null, null]);
  const [upImg, setUpImg] = useState([]);
  const [crop, setCrop] = useState({ unit: '%', width: 100, aspect: 1 });
  const [previewUrl, setPreviewUrl] = useState([null, null, null]);
  const [index, setIndex] = useState(null);
  const [filename, setFilename] = useState('');
  const [fileInfo, setFileInfo] = useState('');
  const imgRef = useRef(null);
  const userColor = useSelector(state => state.common.userColor);

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
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
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

  return (
    <Row>
      <ReactCropDiv
        userColor={userColor}
        src={upImg}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={img => setCrop(img)}
        onComplete={makeClientCrop}
        uploadImg={upImg}
      />
      <ImageRow existImg={previewUrl && previewUrl[0]}>
        <EditWrap>
          <EditImg src={'/images/edit.svg'} width={16} onClick={e => controlFileBtn(e, 0)} />
        </EditWrap>
        <input
          name="file"
          type="file"
          accept="image/*"
          ref={ref => (inputRefs.current[0] = ref)}
          style={{ display: 'none' }}
          onChange={e => addImg(e, 0)}
        />
        {previewUrl && previewUrl[0] && <PreviewImg src={previewUrl[0]} />}
      </ImageRow>
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
  margin-bottom: ${props => props.existImg && '30px'};
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
