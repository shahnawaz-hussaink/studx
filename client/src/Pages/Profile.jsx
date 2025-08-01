import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setProfile(res.data);
    } catch (error) {
      console.error("Profile fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);


  if (loading) return <div>Loading profile...</div>;

  return (
    <div>
      <h1>{profile?.name}</h1>
      <p>Email: {profile?.email}</p>
      <p>Joined: {new Date(profile?.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;
