import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import DashboardCard from '../components/DashboardCard';
import JobSearch from '../components/JobSearch';
import './Dashboard.css';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState({
    applications: 0,
    interviews: 0,
    profileViews: 0
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const jobsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(jobsData.slice(0, 5));
    };

    fetchJobs();
    
    // Simulate stats (in real app, fetch from user's data)
    setStats({
      applications: Math.floor(Math.random() * 50),
      interviews: Math.floor(Math.random() * 10),
      profileViews: Math.floor(Math.random() * 200)
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="dashboard-container"
    >
      <div className="dashboard-header">
        <h1>Your Job Portal Dashboard</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </div>

      <JobSearch />

      <div className="stats-container">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="stat-card"
        >
          <h3>Applications</h3>
          <p>{stats.applications}</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="stat-card"
        >
          <h3>Interviews</h3>
          <p>{stats.interviews}</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="stat-card"
        >
          <h3>Profile Views</h3>
          <p>{stats.profileViews}</p>
        </motion.div>
      </div>

      <div className="recommended-jobs">
        <h2>Recommended For You</h2>
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <DashboardCard 
              key={job.id}
              job={job}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;