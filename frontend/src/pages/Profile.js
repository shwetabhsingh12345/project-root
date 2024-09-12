import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [token]);

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default Profile;
