import { useState } from 'react';
import { motion } from 'framer-motion';
import './JobSearch.css';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic will be implemented here
    console.log('Searching for:', searchTerm, 'in', location);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="job-search-container"
    >
      <form onSubmit={handleSearch} className="job-search-form">
        <div className="search-input">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="search-button"
        >
          Search Jobs
        </motion.button>
      </form>
    </motion.div>
  );
};

export default JobSearch;