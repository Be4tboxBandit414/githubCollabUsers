import React from "react";
import { Link } from "react-router-dom";

function UserCard(props) {
  const { userId, avatar, login, contributions } = props;
  return (
    <Link to={`/user-detail/${userId}`} state={props}>
      <li>
        <div>
          <img src={avatar} height="200px" width="200px" alt="Avatar" />
        </div>
        <div>User: ${login}</div>
        <div>Contributions: ${contributions}</div>
      </li>
    </Link>
  );
}

export default UserCard;
