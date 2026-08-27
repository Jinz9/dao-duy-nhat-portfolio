import React from 'react';
import avatarImg from '../assets/avt.jpg';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="hero-text">
        <h1 className="headline">ĐÀO DUY NHẬT</h1>
        <p className="sub-headline">Sáng tạo - Bền bỉ - Đột phá</p>
      </div>
      <div className="avatar-wrapper">
        <img
          src={avatarImg}
          alt="Avatar Đào Duy Nhật"
          className="avatar"
          width="180"
          height="180"
          loading="eager"
        />
      </div>
    </header>
  );
};

export default Hero;
