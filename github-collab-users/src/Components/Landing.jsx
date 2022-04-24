import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
function Landing(props) {
  const { data, setCurrentPage } = props;
  return (
    <>
      <div className="pages-container">
        <span>Page</span>
        <Link to="#" onClick={() => setCurrentPage(1)}>
          1
        </Link>
        <Link to="#" onClick={() => setCurrentPage(2)}>
          2
        </Link>
        <Link to="#" onClick={() => setCurrentPage(3)}>
          3
        </Link>
        <Link to="#" onClick={() => setCurrentPage(4)}>
          4
        </Link>
        <Link to="#" onClick={() => setCurrentPage(5)}>
          5
        </Link>
      </div>
      <ul type="none">
        {data.map((user) => (
          <UserCard
            userId={user.id}
            avatar={user.avatar_url}
            login={user.login}
            contributions={user.contributions}
            key={user.id}
          />
        ))}
      </ul>
    </>
  );
}

export default Landing;
