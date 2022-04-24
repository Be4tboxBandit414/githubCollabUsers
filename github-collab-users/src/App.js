import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import UserDetail from "./Components/UserDetail";

function App() {
  // State for landing page. Data will be in 'collabData'. Default page is 1 for 'currentPage'.
  const [collabData, setCollabData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    // Fetching data and setting data on mount. Checks for 'currentPage'. Setting new page number will cause re-render and fetch for new 'currentPage'.
    fetchData();
  }, [currentPage]);

  // Async function to fetch data for list view. Due to pagination from api, 'currentPage' marks page number and is changed on click of page number link.
  const fetchData = async () => {
    const pageRes = await fetch(
      `https://api.github.com/repos/facebook/react/contributors?per_page=100&page=${currentPage}`
    );
    const pageData = await pageRes.json();
    setCollabData(pageData);
  };
  // Renders
  return (
    <div className="App">
      <h1 className="title">
        <Link to="/">Contributors of the React Repository </Link>
      </h1>
      <Routes>
        <Route
          path="/"
          element={
            <Landing data={collabData} setCurrentPage={setCurrentPage} />
          }
        />
        <Route path="/user-detail/:userId" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
