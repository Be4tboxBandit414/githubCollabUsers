import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail() {
  // Grab data from state in Link. Store data in 'userData'.
  const location = useLocation();
  const data = location.state;
  const { login } = data;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data for user via login id number and sets 'userData'.
    fetchDetailData();
  }, [login]);

  // Async function to fetch detailed data on user with login id via github api and then sets user data for detail view
  const fetchDetailData = async () => {
    const detailRes = await fetch(`https://api.github.com/users/${login}`);
    const detailData = await detailRes.json();
    setUserData(detailData);
  };
  // Renders
  return (
    <div className="detail-container">
      <div className="image-container">
        <img
          src={userData.avatar_url}
          height="300px"
          width="300px"
          alt="Avatar"
        />
      </div>
      <div className="subcontainer">
        <div>Name: {userData.name}</div>
        <div>Username: {userData.login}</div>
        <div>Location: {userData.location}</div>
        <div>Follower Count: {userData.followers}</div>
        <div>Following Count: {userData.following}</div>
        <div>Bio:</div>
        <div className="bio">{userData.bio}</div>
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default UserDetail;
