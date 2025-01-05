import React, { useState, useEffect } from 'react';
import './Profile.css';

function Profile() {
  // Initializing state for user information and form fields
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    bio: '',
    profileImage: ''
  });

  const [isEditing, setIsEditing] = useState(false); // To toggle between edit and view mode
  const [updatedInfo, setUpdatedInfo] = useState(userInfo); // Stores updated info when editing

  // Load user info from localStorage or default values
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || userInfo;
    setUserInfo(storedUserInfo);
    setUpdatedInfo(storedUserInfo); // Set initial values to the update form
  }, []);

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to update profile
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated info to localStorage (or backend if needed)
    localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
    setUserInfo(updatedInfo); // Update user info state
    setIsEditing(false); // Switch to view mode after updating
  };

  // Profile image fallback if no image is provided
  const handleImageError = (e) => {
    e.target.src = '/placeholder.png'; // Set a placeholder image if the profile image fails to load
  };

  return (
    <div className="container">
      <h1 className="my-4">Profile</h1>
      
      {/* Profile Info Display */}
      <div className="profile-info">
        <div className="d-flex justify-content-center mb-4">
          <img
            src={`http://localhost:5001${userInfo.profileImage || '/placeholder.png'}`}
            alt="Profile"
            className="rounded-circle"
            width="150"
            height="150"
            onError={handleImageError}
          />
        </div>

        <div>
          <h3>{userInfo.username || 'Username'}</h3>
          <p>{userInfo.email || 'Email'}</p>
          <p>{userInfo.bio || 'No bio available'}</p>
        </div>
      </div>

      {/* Edit Profile Section */}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={updatedInfo.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={updatedInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bio" className="form-label">Bio</label>
            <textarea
              id="bio"
              name="bio"
              className="form-control"
              value={updatedInfo.bio}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">Profile Image URL</label>
            <input
              type="text"
              id="profileImage"
              name="profileImage"
              className="form-control"
              value={updatedInfo.profileImage}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">Save Changes</button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          className="btn btn-warning mt-3"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}

export default Profile;
