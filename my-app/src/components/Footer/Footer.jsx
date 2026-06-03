import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <p className="footer-heading">About</p>
        <p className="footer-small">
          A collaborative project by Nyege Vincent Chibuzor, Emmanuel Odiong, and Uwakmfonabasi Enang.
        </p>
        <p className="footer-small">
          <a href="https://amakandukwu.com/" target="_blank" rel="noreferrer" className="footer-link">Amaka</a> &bull;{' '}
          <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer" className="footer-link">Ifeoma</a> &bull;{' '}
          <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer" className="footer-link">TSAcademy</a> &bull;{' '}
          <a href="https://github.com/Saint-Vin/Capstone-Project.git" target="_blank" rel="noreferrer" className="footer-link">Group 18</a>
        </p>
        <p className="footer-small">
          &copy;2026 Design by Amaka &amp; Ifeoma. Built by Group 18. All rights reserved.
        </p>
      </div>
      <div className="footer-right">
        <p className="footer-brand">TSAcademy</p>
      </div>
    </footer>
  );
};

export default Footer;