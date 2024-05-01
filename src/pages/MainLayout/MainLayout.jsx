import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./MainLayout.css";
const MainLayout = () => {
  const location = useLocation();
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [location]);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
