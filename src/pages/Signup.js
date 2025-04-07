import { motion } from 'framer-motion';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


const handleSignup = async (e) => {
  e.preventDefault();
  
  if (password !== confirmPassword) {
    setError("Passwords don't match");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate('/dashboard');
  } catch (err) {
    
    switch (err.code) {
      case 'auth/invalid-api-key':
        setError("Invalid configuration. Please contact support.");
        break;
      case 'auth/email-already-in-use':
        setError("This email is already registered.");
        break;
      case 'auth/weak-password':
        setError("Password should be at least 6 characters.");
        break;
      default:
        setError("Failed to create account. Please try again.");
    }
    console.error(err);
  }
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="auth-container"
    >
      <div className="auth-card">
        <h2>Create Your Account</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="auth-button"
          >
            Sign Up
          </motion.button>
        </form>
        
        <p className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;