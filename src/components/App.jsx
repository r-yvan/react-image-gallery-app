import { useState } from "react";
import React from "react";
import "../styles/index.css";
import Home from "./Home";
import Overview from "./Overview";

const App = () => {
  const [isOverviewSelected, setIsOverviewSelected] = useState(false);

  return (
    <div className="bg-component">
      {isOverviewSelected ? (
        <Overview goToHome={() => setIsOverviewSelected(false)}/>
      ) : (
        <Home goToOverview={() => setIsOverviewSelected(true)} />
      )}
    </div>
  );
};

export default App;
