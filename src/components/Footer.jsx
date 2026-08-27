import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="apple-footer" id="contact">
      <div className="footer-content">
        <div className="footer-links">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:nhatdd.23itb@vku.udn.vn">nhatdd.23itb@vku.udn.vn</a>
          </p>
          <p>
            <strong>Facebook:</strong>{' '}
            <a
              href="https://www.facebook.com/duy.nhat.351466"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/duy.nhat.351466
            </a>
          </p>
        </div>
        <div className="footer-copyright">
          <p>Bản quyền &copy; {currentYear} Đào Duy Nhật. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
