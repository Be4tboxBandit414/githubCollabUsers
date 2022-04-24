import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
function Landing(props) {
  // Grab passed data and 'setCurrentPage' from props. Data to pass to UserCard component. setCurrentPage to change 'currentPage'.
  const { data, setCurrentPage } = props;

  // Renders
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
      <ul>
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
