import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="outletDiv">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
