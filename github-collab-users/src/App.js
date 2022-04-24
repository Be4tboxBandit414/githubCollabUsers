import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import UserDetail from "./Components/UserDetail";

function App() {
  const [collabData, setCollabData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/facebook/react/contributors?per_page=100&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCollabData(data);
      });
  }, [currentPage]);
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
