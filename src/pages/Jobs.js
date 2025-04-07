import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import JobCard from '../components/JobCard';
import './Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const jobsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(jobsData);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="jobs-container"
    >
      <h1>Available Jobs</h1>
      <div className="jobs-grid">
        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          jobs.map((job, index) => (
            <JobCard key={job.id} job={job} delay={index * 0.1} />
          ))
        )}
      </div>
    </motion.div>
  );
};

export default Jobs;