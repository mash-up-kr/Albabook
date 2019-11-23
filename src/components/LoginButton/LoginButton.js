import React from 'react';
import KakaoAuth from 'react-kakao-login';

const LoginButton = () => {
  const handleResponse = async (res) => {
    const token = res.response.access_token;
    const user = res.profile;

    console.log(token, user);
    // TODO: 유저정보 서버POST 및 AUTH 상태관리
  };

  const handleFailure = (error) => {
    console.error(error);
  };

  return (
    <KakaoAuth
      jsKey={process.env.REACT_APP_KAKAO_ID}
      getProfile
      useDefaultStyle
      buttonText="카카오 로그인"
      onSuccess={handleResponse}
      onFailure={handleFailure}
    />
  );
};
export default LoginButton;
