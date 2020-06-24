import { useState, useRef, useCallback } from 'react';
import ReactCrop from 'react-image-crop';
import axios from 'axios';

export default function() {
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });
  const [previewUrl, setPreviewUrl] = useState();
  const [file, setFile] = useState('');
  const [fileType, setFileType] = useState('');
  const [lastModified, setlastModified] = useState('');
  const [fileName, setFileName] = useState('');

  const onSelectFile = e => {
    console.log(e.target.files[0], 'e.target.file');
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setFileType(e.target.files[0].type);
      setlastModified(e.target.files[0].lastModified);
      setFileName(e.target.files[0].name);
    }
  };

  //
  // If you setState the crop in here you should return false.
  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = async crop => {
    if (imgRef.current && crop.width && crop.height) {
      const previewFile = await createCropPreview(imgRef.current, crop, fileName);
      console.log('current', previewFile);
      setFile(previewFile);
    }
  };

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = Math.ceil(crop.width * scaleX);
    canvas.height = Math.ceil(crop.height * scaleY);
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
        setPreviewUrl(window.URL.createObjectURL(blob));
        console.log('previewUrl', previewUrl);
        resolve(blob);
      }, fileType);
    }).catch(err, console.log('blob promise err ')); //*에러처리 필요
  };
  console.log(file);
  const submitImg = () => {
    console.log(file, 'files');
    const blobToFile = new File([file], lastModified);
    const formData = new FormData();
    console.log(blobToFile);
    formData.append('file', blobToFile);
    // blobToFile.forEach((item, index) => formData.append(`file`, item));
    axios
      .post('http://127.0.0.1:3001/api/board/imgUpload', formData)
      .then(res => console.log(res, 'res'))
      .catch(err => console.log(err, 'err_upload'));
  };
  return (
    <div>
      <button type="button" onClick={submitImg}>
        사진전송
      </button>
      <div>
        <input type="file" name="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <ReactCrop
        src={upImg}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={c => setCrop(c)}
        onComplete={makeClientCrop}
      />
      {previewUrl && <img width="100%" alt="Crop preview" src={previewUrl} />}
    </div>
  );
}
