import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoggedInNavbar from "../components/Navbar/LoggedInNavbar";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
const SharedHomePage = () => {
  const { isLoggedIn, loading } = useSelector((store) => store.user);
  return (
    !loading && (
      <>
        <div
          className="nav"
          style={{
            position: "fixed",
            width: "100%",
            zIndex: "999",
          }}
        >
          {isLoggedIn ? <LoggedInNavbar /> : <Navbar />}
        </div>
        <div className="outlets" style={{ paddingTop: "6vmax" }}>
          <Outlet />
        </div>
      </>
    )
  );
};

export default SharedHomePage;
