import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import MainLayout from "./pages/MainLayout/MainLayout.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import Team from "./pages/Team/Team.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
