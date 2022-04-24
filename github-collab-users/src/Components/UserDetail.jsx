import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail() {
  const location = useLocation();
  const data = location.state;
  const { login } = data;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((resData) => {
        setUserData(resData);
      });
  }, [login]);
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
        <div> Location: {userData.location}</div>
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
