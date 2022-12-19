import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to={`addPerson`}>Add person</Link>

      <Link to={`viewPerson`}>View person</Link>
    </div>
  );
}
