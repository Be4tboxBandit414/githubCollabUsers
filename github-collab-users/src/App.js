import "./App.css";
import { useEffect, useState, useCallback } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import UserDetail from "./Components/UserDetail";

function App() {
  // State for landing page. Data will be in 'collabData'. Default page is 1 for 'currentPage'.
  const [collabData, setCollabData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSorted, setDataSorted] = useState(false);

  // Async function to fetch data for list view. Due to pagination from api, 'currentPage' marks page number and is changed on click of page number link.
  const fetchData = useCallback(async () => {
    const pageRes = await fetch(
      `https://api.github.com/repos/facebook/react/contributors?per_page=100&page=${currentPage}`
    );
    const pageData = await pageRes.json();
    setCollabData(pageData);
    setOriginalData(pageData);
  }, [currentPage]);

  // Handle sorting users alphabetically
  const handleSort = () => {
    let sortData = [...collabData];
    if (dataSorted === false) {
      sortData.sort((a, b) => {
        const firstUser = a.login.toLowerCase();
        const secondUser = b.login.toLowerCase();
        return firstUser < secondUser ? -1 : null;
      });
      setCollabData(sortData);
      setDataSorted(true);
    } else {
      setCollabData(originalData);
      setDataSorted(false);
    }
  };

  useEffect(() => {
    // Fetching data and setting data on mount. Checks for 'currentPage'. Setting new page number will cause re-render and fetch for new 'currentPage'.
    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [currentPage, fetchData]);

  // Renders
  return (
    <div className="App">
      <h1 className="title" onClick={() => setCurrentPage(1)}>
        <Link to="/">Contributors of the React Repository </Link>
      </h1>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              data={collabData}
              setCurrentPage={setCurrentPage}
              handleSort={handleSort}
              dataSorted={dataSorted}
              setDataSorted={setDataSorted}
            />
          }
        />
        <Route
          path="/user-detail/:userId"
          element={<UserDetail currentPage={currentPage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
