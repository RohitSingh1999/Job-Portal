import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      <div className="hero-section">
        <h1>Find Your Dream Job Today</h1>
        <p>Join thousands of companies and candidates in our growing network</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button primary">Sign Up</Link>
          <Link to="/login" className="cta-button secondary">Login</Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose Our Job Portal?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Thousands of Jobs</h3>
            <p>Access to the latest job postings from top companies</p>
          </div>
          <div className="feature-card">
            <h3>Easy Application</h3>
            <p>Apply to jobs with just a few clicks</p>
          </div>
          <div className="feature-card">
            <h3>Career Growth</h3>
            <p>Find opportunities that match your career aspirations</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;