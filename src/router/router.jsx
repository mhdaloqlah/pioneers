import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import PioneersPage from "../pages/PioneersPage/PioneersPage";
import SignIn from "../pages/SignInPage/SignIn";
import PioneersList from "../pages/PioneersList/PioneersList";
import Team from "../pages/Team/Team";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "",
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
    ],
  },
]);
