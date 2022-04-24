import { useLocation } from "react-router-dom";
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
    <div>
      Name: {userData.name}
      Username: {userData.login}
      <img
        src={userData.avatar_url}
        height="300px"
        width="300px"
        alt="Avatar"
      />
      Location: {userData.location}
      Bio: {userData.bio}
      Follower Count: {userData.followers}
      Following Count: {userData.following}
    </div>
  );
}

export default UserDetail;
