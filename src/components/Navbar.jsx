import React from 'react';

const Navbar = () => {
  return (
    <nav className="apple-nav" aria-label="Main Navigation">
      <div className="nav-content">
        <a href="#" className="logo" title="Trang chủ">
          <span className="golden-apple" aria-hidden="true">&#327;</span>
          DND
        </a>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">Giới thiệu</a></li>
          <li><a href="#skills" className="nav-link">Kỹ năng</a></li>
          <li><a href="#projects" className="nav-link">Dự án</a></li>
          <li><a href="#contact" className="nav-link">Liên hệ</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
