import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import './JobCard.css';

const JobCard = ({ job, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      whileHover={{ scale: 1.03 }}
      className="job-card"
    >
      <div className="job-card-header">
        <div className="company-logo">
          {job.company?.charAt(0) || 'C'}
        </div>
        <div>
          <h3>{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
      </div>
      
      <div className="job-details">
        <div className="detail-item">
          <FaBriefcase />
          <span>{job.type || 'Full-time'}</span>
        </div>
        <div className="detail-item">
          <FaMapMarkerAlt />
          <span>{job.location || 'Remote'}</span>
        </div>
        <div className="detail-item">
          <FaMoneyBillWave />
          <span>{job.salary || 'Competitive'}</span>
        </div>
        <div className="detail-item">
          <FaClock />
          <span>{job.posted || '2 days ago'}</span>
        </div>
      </div>
      
      <div className="job-description">
        <p>{job.description?.substring(0, 150) || 'We are looking for a skilled professional to join our team...'}</p>
      </div>
      
      <div className="skills-container">
        {job.skills?.slice(0, 4).map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
      
      <button className="apply-button">
        Apply Now
      </button>
    </motion.div>
  );
};

export default JobCard;