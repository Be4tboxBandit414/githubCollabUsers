import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
function Landing(props) {
  // Grab passed data and 'setCurrentPage' from props. Data to pass to UserCard component. setCurrentPage to change 'currentPage'.
  const { data, setCurrentPage, handleSort, dataSorted, setDataSorted } = props;

  // Sets current page number and resets sort state
  const handlePages = (pageNumber) => {
    setCurrentPage(pageNumber);
    setDataSorted(false);
  };

  // Renders
  return (
    <>
      <div className="pages-container">
        <div className="nav">
          <span>Page</span>
          <Link to="#" onClick={() => handlePages(1)}>
            1
          </Link>
          <Link to="#" onClick={() => handlePages(2)}>
            2
          </Link>
          <Link to="#" onClick={() => handlePages(3)}>
            3
          </Link>
          <Link to="#" onClick={() => handlePages(4)}>
            4
          </Link>
          <Link to="#" onClick={() => handlePages(5)}>
            5
          </Link>
          <div onClick={handleSort}>
            {dataSorted ? "Unsort Users" : "Sort Alphabetically"}
          </div>
        </div>
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
