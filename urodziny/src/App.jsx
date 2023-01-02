import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="phone">
        <Navigation></Navigation>
        <div className="outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
