import React from "react";
import "../styles/index.css";
import Home from "./Home";
import Overview from "./Overview";
import Categories from "./Categories";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/categories" element={<Overview />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
