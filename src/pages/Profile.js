import { motion } from 'framer-motion';
import { auth } from '../firebase';
import './Profile.css';

const Profile = () => {
  const user = auth.currentUser;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="profile-container"
    >
      <h1>Your Profile</h1>
      {user ? (
        <div className="profile-details">
          <div className="profile-header">
            <div className="avatar">
              {user.email?.charAt(0).toUpperCase()}
            </div>
            <h2>{user.email}</h2>
          </div>
          
          <div className="profile-section">
            <h3>Personal Information</h3>
            <div className="info-grid">
              <div>
                <label>Email</label>
                <p>{user.email}</p>
              </div>
              <div>
                <label>Account Created</label>
                <p>{new Date(user.metadata.creationTime).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          <div className="profile-section">
            <h3>Job Preferences</h3>
            <p>Update your job preferences to get better recommendations</p>
          </div>
        </div>
      ) : (
        <p>Please login to view your profile</p>
      )}
    </motion.div>
  );
};

export default Profile;