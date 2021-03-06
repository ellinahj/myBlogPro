import { useState, useEffect } from 'react';

const tokenConfig = () => {
  const storedToken = localStorage.getItem('mydiary_token');
  const config = {
    access_token: storedToken
  };
  return config;
};

function useInnerWidth() {
  //카드 이미지 반응형 변환
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    function resizeHandler() {
      setInnerWidth(window.innerWidth);
    }
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);
  return innerWidth;
}

function colorLuminance(hex, lum) {
  //사용자 테마설정시 그라데이션
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  let rgb = '#';
  let c;
  let i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }
  return rgb;
}
export { colorLuminance, useInnerWidth, tokenConfig };
