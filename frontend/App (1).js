import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './Context';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import './App.css'; // Import the CSS file
import LikedSongs from "./components/LikedMusic";
import Profile from './components/Profile'; // Import Profile component
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';




function App() {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  // Check if the current page is Sign-Up or Sign-In
  const isSignUpOrSignIn = location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <div className="app-container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/signup" />}
        />
        <Route path="/liked-songs" element={<LikedSongs />} />

        <Route path="/home" element={< Home />} />
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
      {/* Conditionally render footer based on current page */}
      {!isSignUpOrSignIn && <Footer />}
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
