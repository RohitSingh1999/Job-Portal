import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>JobPortal</h3>
          <p>Connecting talent with opportunity</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Companies</li>
            <li>About Us</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: contact@jobportal.com</li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;