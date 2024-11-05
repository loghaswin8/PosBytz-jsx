import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginCom';
import RegisterForm from '../components/RegisterCom';
const AccessPage = () => {
  const location = useLocation();

  const renderRightContent = () => {
    switch (location.pathname) {
      case '/Login':
        return <LoginForm />;
      case '/Register':
        return <RegisterForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <section className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-7 ml-[80px]">
        <section className="flex justify-center items-center">
          <img
            src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/image_1705919272447.png"
            className="w-full h-auto max-w-none"
            alt="Auth"
            style={{ width: '760px', height: '680px' }}
          />
        </section>
        <section className="flex flex-col justify-center items-center">
          {renderRightContent()}
        </section>
      </div>
    </section>
  );
};

export default AccessPage;
