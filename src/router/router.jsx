import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import PioneerPage from "../pages/PioneersPage/PioneerPage";
import SignIn from "../pages/SignInPage/SignIn";
import PioneersList from "../pages/PioneersList/PioneersList";
import Team from "../pages/Team/Team";
import Teamadvisory from "../pages/Teamadvisory/Teamadvisory";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/pioneers",
    element: <MainLayout />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "/pioneers",
        element: <HomePage />,
      },

      {
        path: "signIn",
        element: <SignIn />,
      },

      {
        path: "aboutus",
        element: <AboutUsPage />,
      },

      {
        path: "PioneersList",
        element: <PioneersList />,
      },

      {
        path: "Team",
        element: <Team />,
      },
      {
        path: "Teamadvisory",
        element: <Teamadvisory />,
      },
      {
        path: "pioneer",
        element: <PioneerPage />,
      },
    ],
  },
  
]);
