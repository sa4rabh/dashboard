import React, { useState } from 'react';
import './App.css';
import Signup from './Components/Signin/Signup';
import Dashboard from './Components/dashboard/Dashboard';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  function handleSignup() {
    setShowDashboard(true);
  }

  return (
    <div>
      {showDashboard ? (
        <Dashboard />
      ) : (
        <Signup onSignup={handleSignup} />
      )}
    </div>
  );
}
