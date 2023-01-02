import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AddPerson from "./components/addPerson/AddPerson";
import ViewPerson from "./components/viewPerson/viewPerson";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "addPerson", element: <AddPerson /> },
      { path: "viewPerson", element: <ViewPerson /> },
      { path: "/", element: <ViewPerson /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
