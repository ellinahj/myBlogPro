import styled, { css } from 'styled-components';
import { useState, useRef, useCallback, useEffect } from 'react';
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
      <>
        <ReactCropDiv
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={c => setCrop(c)}
          onComplete={makeClientCrop}
          uploadImg={upImg}
        />
      </>
      <ImageRow existImg={previewUrl && previewUrl[0]}>
        <AddBtn name="button" onClick={e => controlFileBtn(e, 0)}>
          사진1
        </AddBtn>
        <input
          name="file"
          type="file"
          accept="image/*"
          ref={ref => (inputRefs.current[0] = ref)}
          style={{ display: 'none' }}
          onChange={e => addImg(e, 0)}
        />
        {previewUrl && previewUrl[0] && <PreviewImg src={previewUrl[0]} />}
        {previewUrl && previewUrl[0] && <PhotoName>사진1</PhotoName>}
      </ImageRow>
      <ImageRow existImg={previewUrl && previewUrl[1]}>
        <AddBtn name="button" onClick={e => controlFileBtn(e, 1)}>
          사진2
        </AddBtn>
        <input
          name="file"
          type="file"
          accept="image/*"
          ref={ref => (inputRefs.current[1] = ref)}
          style={{ display: 'none' }}
          onChange={e => addImg(e, 1)}
        />
        {previewUrl && previewUrl[1] && <PreviewImg src={previewUrl[1]} />}
        {previewUrl && previewUrl[1] && <PhotoName>사진2</PhotoName>}
      </ImageRow>
      <ImageRow existImg={previewUrl && previewUrl[2]}>
        <AddBtn type="button" name="file" onClick={e => controlFileBtn(e, 2)}>
          사진3
        </AddBtn>
        <input
          name="file"
          type="file"
          accept="image/*"
          ref={ref => (inputRefs.current[2] = ref)}
          style={{ display: 'none' }}
          onChange={e => addImg(e, 2)}
        />

        {previewUrl && previewUrl[2] && <PreviewImg src={previewUrl[2]} />}
        {previewUrl && previewUrl[2] && <PhotoName>사진3</PhotoName>}
      </ImageRow>
      {/* <button type="button" onClick={submitImg}>
        사진전송
      </button> */}
    </Row>
  );
}
const AddBtn = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  margin-bottom: 5px;
  width: fit-content;
`;
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
  border: ${props => (props.uploadImg.length > 0 ? '2px solid #ff254f' : 'none')};
  margin-bottom: ${props => (props.uploadImg.length > 0 ? '40px' : '0px')};
`;
const PhotoName = styled.div`
  font-size: 15px;
  margin-top: 5px;
`;
