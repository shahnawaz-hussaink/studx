import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { handleError } from '../utils'; // same utils you use in login

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          handleError('You are not logged in.');
          setLoading(false);
          return;
        }

        const res = await fetch('http://localhost:3000/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setProfile(data);
        } else {
          handleError(data.message || 'Failed to fetch profile.');
        }
      } catch (err) {
        handleError('Error fetching profile: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="p-10 text-xl">Loading profile...</div>;

  if (!profile) return <div className="p-10 text-xl">No profile data available.</div>;

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="raleway w-full md:w-2/4 flex justify-center py-10 px-10 md:py-20">
        <div className="w-full rounded-xl shadow-2xl p-5 md:p-15 py-10">
          <div className="pb-6 md:pb-10">
            <h1 className="text-2xl md:text-3xl font-black py-3">Your Profile</h1>
            <p className="text-lg text-gray-500">
              Welcome, <span className="font-bold">{profile?.name}</span>
            </p>
          </div>

          <div className="w-full my-2">
            <p className="text-lg">
              <strong>Email:</strong> {profile?.email}
            </p>
            <p className="text-lg">
              <strong>Joined:</strong>{' '}
              {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'N/A'}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-2/4">
        <img
          src="/Login_Signup/profile.png"
          alt="Profile Visual"
          className="h-screen w-full object-cover"
        />
      </div>
      <ToastContainer />
    </div>
  );
}
