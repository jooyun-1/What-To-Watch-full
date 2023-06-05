import React from 'react';

const Facebook = () => {
  const handleFacebookLogin = () => {
    fetch('/api/facebook-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // 백엔드로부터 받은 데이터를 처리합니다.
      })
      .catch((error) => {
        console.error(error);
        // 에러 처리를 합니다.
      });
  };

  return (
    <div>
      {/* ...회원가입 페이지 내용... */}
      <button onClick={handleFacebookLogin}>Facebook으로 로그인</button>
    </div>
  );
};

export default Facebook;