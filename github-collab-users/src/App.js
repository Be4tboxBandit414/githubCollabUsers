import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import UserDetail from "./Components/UserDetail";
//import UserCard from "./Components/UserCard";

function App() {
  const [collabData, setCollabData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/facebook/react/contributors?per_page=100&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setCollabData(data);
      });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing data={collabData} />} />
        <Route path="/user-detail/:userId" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
